import { Page, expect } from '@playwright/test';

/**
 * @param {import('@playwright/test').Page} page - The Playwright page object.
*/

export async function successfulLogout(page) {
    await page.locator('//img[@class="oxd-userdropdown-img"]').click();
    await page.locator('//a[normalize-space()="Logout"]').click();
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
}
