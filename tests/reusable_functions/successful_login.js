import { Page, expect } from '@playwright/test';
import loginPage from '../test-data/loginPage.json';

/**
 * @param {import('@playwright/test').Page} page - The Playwright page object.
*/

const username = loginPage.validUser.username;
const password = loginPage.validUser.password;

export async function successfulLogin(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    await page.locator('//input[@placeholder="Username"]').fill(username);
    await page.locator('//input[@placeholder="Password"]').fill(password);
    await page.locator('//button[normalize-space()="Login"]').click();
    await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible({ timeout: 5000 });
}
