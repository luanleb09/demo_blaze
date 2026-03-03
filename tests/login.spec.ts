import { test, expect } from '@playwright/test';
import { USER } from '../utils/test-data';

test('Login successfully', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  await page.click('#login2');

  await page.fill('#loginusername', USER.username);

  await page.fill('#loginpassword', USER.password);

  await page.click('button:has-text("Log in")');

  await expect(page.locator('#logout2')).toBeVisible();

});