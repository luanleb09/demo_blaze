import { test, expect } from '@playwright/test';
import { ORDER } from '../utils/test-data';

test('Add to cart and place order', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  await page.click('a:has-text("Samsung galaxy s6")');

  await page.click('a:has-text("Add to cart")');

  await page.waitForTimeout(2000);

  await page.click('#cartur');

  await page.click('button:has-text("Place Order")');

  await page.fill('#name', ORDER.name);
  await page.fill('#country', ORDER.country);
  await page.fill('#city', ORDER.city);
  await page.fill('#card', ORDER.creditCard);
  await page.fill('#month', ORDER.month);
  await page.fill('#year', ORDER.year);

  await page.click('button:has-text("Purchase")');

  await expect(page.locator('.sweet-alert')).toBeVisible();

});