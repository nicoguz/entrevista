import { test, expect } from '@playwright/test';

// Could change in the future but works for now
// Also alerts when the api makes changes
test.describe('CharacterPage Tests', () => {
    test('should display character details correctly', async ({ page }) => {
      await page.goto('http://localhost:3000/characters');
      const firstCharacterLink = page.locator('text=Philip Jay Fry');
      await firstCharacterLink.click();
  
      // Verify we are on /characters/1 (could change) and check details
			const url = page.url();
			// Could change
			await expect(url).toBe('http://localhost:3000/characters/1');

      const pageTitle = page.locator('h1');
			if (pageTitle) {
				const pageTitleText = await pageTitle.textContent();
				if (pageTitleText && pageTitleText.trim() !== '') {
					await expect(pageTitleText.trim()).not.toBe('');
				} else {
					throw new Error('pageTitle does not contain expected text');
				}
			} else {
				throw new Error('pageTitle not found');
			}
  
      const planetSection = page.locator('#planetValue');
      if (planetSection) {
				const planetSectionText = await planetSection.textContent();
				if (planetSectionText && planetSectionText.trim() !== '') {
					await expect(planetSectionText.trim()).not.toBe('');
				} else {
					throw new Error('planetSection does not contain expected text');
				}
			} else {
				throw new Error('planetSection not found');
			}
    });
  
    test('should navigate back when "Go Back" button is clicked', async ({ page }) => {
      await page.goto('http://localhost:3000/characters');
      const firstCharacterLink = page.locator('text=Philip Jay Fry');
      await firstCharacterLink.click();
  
      // Navigate back
      const goBackButton = page.locator('#backButton');
      await goBackButton.click();
      // await page.waitForNavigation();
      // Verify we are back at the previous URL
			const url = page.url();
			await expect(url).toBe('http://localhost:3000/characters');
    });
  
    test('should open Futurama Wikipedia page when "Más Sobre Futurama" button is clicked', async ({ page }) => {
      await page.goto('http://localhost:3000/characters');
      const firstCharacterLink = page.locator('text=Philip Jay Fry');
      await firstCharacterLink.click();
  
      // Click button
      const moreAboutFuturamaButton = page.locator('text=Más Sobre Futurama');
      await moreAboutFuturamaButton.click();
      // Small delay to wait for the page to open
			await page.waitForTimeout(500);
      const newPage = await page.context().waitForEvent('page');
      const url = newPage.url();
      await expect(url).toContain('wikipedia.org/wiki/Futurama');
    });
});