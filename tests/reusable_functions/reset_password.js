import { Page, expect } from '@playwright/test';
import { loginPage } from '../test-data/loginPage.json';

/**
 * @param {import('@playwright/test').Page} page - The Playwright page object.
*/

export async function resetPassword(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    await expect(page.locator('//div[@class="orangehrm-login-forgot"="Forgot your password? "]')).toBeVisible({ timeout: 3000 });

    await page.locator('//div[@class="orangehrm-login-forgot"="Forgot your password? "]').click();
    await page.locator('//input[@placeholder="Username"]').fill('Knx123');
    await page.locator('//button[normalize-space()="Reset Password"]').click();

    await expect(page.locator('//h6[normalize-space()="Reset Password link sent successfully"]')).toBeVisible({ timeout: 3000 });
}  