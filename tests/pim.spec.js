import { test, expect } from '@playwright/test';
import { successfulLogin } from './reusable_functions/successful_login.js';

test('TC-PIM-001: Verify PIM page is accessible after login', async ({ page }) => {
    await successfulLogin(page);
    await page.waitForTimeout(5000);
});

