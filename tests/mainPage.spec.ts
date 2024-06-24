import { test, expect } from '@playwright/test';
import { Character } from '../src/interfaces/CardIfc';

const mockCharacters: Character[] = [
  {
    id: 1,
    name: { first: 'Philip', middle: 'J.', last: 'Fry' },
    images: { main: 'https://sampleapis.com/img/futurama/characters/1.png' },
    species: 'Human',
    homePlanet: 'Earth',
    age: 25,
    gender: 'Male',
    occupation: "Intergalactic Delivery Boy",
    sayings: [
      "Shut up and take my money!",
      "I'm walking on sunshine, woah oh oooh",
      "This is how we do it. Pick your nose and chew it",
    ]
  },
];

test.describe('MainPage Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Mock the fetch call
    await page.route('https://api.sampleapis.com/futurama/characters', (route) => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockCharacters),
      });
    });
  });

  test('should display the correct heading', async ({ page }) => {
    await page.goto('http://localhost:3000/characters'); // Adjust the URL if necessary
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Futurama Characters');
  });

  test('should display fetched characters', async ({ page }) => {
    await page.goto('http://localhost:3000/characters');
    for (const character of mockCharacters) {
      const cardTitle = page.locator(`text=${character.name.first} ${character.name.middle} ${character.name.last}`);
      await expect(cardTitle).toBeVisible();
    }
  });

  test('should handle error state', async ({ page }) => {
    // Mock the fetch call to return an error
    await page.route('https://api.sampleapis.com/futurama/characters', (route) => {
      route.abort();
    });

    await page.goto('http://localhost:3000/characters');
    const errorMessage = page.locator('text=Failed to fetch data');
    await expect(errorMessage).toBeVisible();
  });
});
