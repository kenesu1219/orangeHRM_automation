import { test, expect } from '@playwright/test';
// import { toggleSidebar } from './utils/sidebar-helper'; // Adjust path based on your file structure
// import { toggleSidebar } from './reusable_functions/expand_and_collapse_side_bar.js'; // Adjust path based on your file structure
import { collapseSidebar, expandSidebar } from './reusable_functions/expand_and_collapse_side_bar.js'; // Adjust path based on your file structure
test('Verify sidebar collapse and expand functionality', async ({ page }) => {
    // Navigate and Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
    await page.waitForTimeout(5000);

    // Call your reusable function to collapse it
    await collapseSidebar(page);
    await page.waitForTimeout(5000);

    // Call it again to expand it back
    await expandSidebar(page);
    await page.waitForTimeout(5000);
});