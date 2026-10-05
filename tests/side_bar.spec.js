import { test, expect } from '@playwright/test';
import { collapseSidebar, expandSidebar } from './reusable_functions/expand_and_collapse_side_bar.js'; // functions for collapse and expand action

test('collapse and expand the sidebar', async ({ page }) => {
    // Navigate and Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
    await page.waitForTimeout(5000);

    // Collapse the sidebar
    await collapseSidebar(page);
    await page.waitForTimeout(5000);

    // Expand the sidebar
    await expandSidebar(page);
    await page.waitForTimeout(5000);
}); 