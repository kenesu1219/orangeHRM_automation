import { test, expect } from '@playwright/test';

test('TC-LOG-001: Verify successful login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible({ timeout: 3000 });
});

test('TC-LOG-002: Verify invalid login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    
    await page.locator('//input[@placeholder="Username"]').fill('');
    await page.locator('//input[@placeholder="Password"]').fill('');
    await page.waitForTimeout(3000);
    await page.locator('//button[normalize-space()="Login"]').click();
    
    // Locate and verify both "Required" messages using native Playwright locators
    await expect(page.getByText('Required').first()).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Required').nth(1)).toBeVisible({ timeout: 3000 });

    await page.waitForTimeout(3000);
});

test('TC-LOG-003: Verify login with non-registered username', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    
    await page.locator('//input[@placeholder="Username"]').fill('Knx123');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.waitForTimeout(3000);
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await expect(page.locator('//p[normalize-space()="Invalid credentials"]')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(3000);
});

test('TC-LOG-004: Verify login with invalid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin12345');
    await page.waitForTimeout(3000);
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await expect(page.locator('//p[normalize-space()="Invalid credentials"]')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(3000);
});

test('TC-LOG-005: Verify successful logout', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    
    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();
    
    await page.locator('//img[@class="oxd-userdropdown-img"]').click();
    await page.locator('//a[normalize-space()="Logout"]').click();

    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
});

test('TC-FPW-001: Verify that user is able to access forgot password feature', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    await expect(page.locator('//div[@class="orangehrm-login-forgot"="Forgot your password? "]')).toBeVisible({ timeout: 3000 });

    await page.locator('//div[@class="orangehrm-login-forgot"="Forgot your password? "]').click();
    await page.locator('//input[@placeholder="Username"]').fill('Knx123');
    await page.locator('//button[normalize-space()="Reset Password"]').click();

    await expect(page.locator('//h6[normalize-space()="Reset Password link sent successfully"]')).toBeVisible({ timeout: 3000 });

});