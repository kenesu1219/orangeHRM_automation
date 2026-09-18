import { Page, expect } from '@playwright/test';

/**
 * Toggles the sidebar state (collapses it if open, or opens it if closed).
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 */
// export async function toggleSidebar(page) {
//     const sideNavItem = page.locator('//span[normalize-space()="Admin"]');
//     const sideNavCollapse = page.locator('//button[@class="oxd-icon-button oxd-main-menu-button"]');

//     // Check if the sidebar text/item is currently visible
//     const isVisible = await sideNavItem.isVisible();

//     // If it's visible (meaning expanded), click to collapse. Otherwise, it's collapsed, so click to expand.
//     // await sideNavCollapse.click();

//     if (isVisible) {
//         // Wait for the item to become hidden/detached or use an assertion
//         await sideNavCollapse.click();
//         await expect(sideNavItem).not.toBeVisible();
//     }
//     // Optional: Add assertions to guarantee the state toggled successfully
//     // if (isVisible) {
//     //     await expect(sideNavItem).not.toBeVisible();
//     // } else {
//     //     await expect(sideNavItem).toBeVisible();
//     // }
// }


export async function collapseSidebar(page) {
    const sideNavItem = page.locator('//span[normalize-space()="Admin"]');
    const sideNavCollapse = page.locator('//button[@class="oxd-icon-button oxd-main-menu-button"]');

    if (await sideNavItem.isVisible()) {
        await sideNavCollapse.click();
        await expect(sideNavItem).not.toBeVisible();
    }
}

export async function expandSidebar(page) {
    const sideNavItem = page.locator('//span[normalize-space()="Admin"]');
    const sideNavExpand = page.locator('//button[@class="oxd-icon-button oxd-main-menu-button"]');

    if (!(await sideNavItem.isVisible())) {
        await sideNavExpand.click();
        await expect(sideNavItem).toBeVisible();
    }
}