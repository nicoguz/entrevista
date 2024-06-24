import { test, expect } from '@playwright/test';

test('has title and text', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Futurama Characters');
  await expect(page.getByText('Entrevista Nicolás Guzmán')).toBeVisible();
  await expect(page.getByText('Ir a Solución')).toBeVisible();
});

test('should navigate to /characters when button is clicked', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const button = page.locator('text=Ir a Solución');
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL('http://localhost:3000/characters');
});