import { Page, expect } from '@playwright/test';
import loginPage from '../test-data/loginPage.json';

/**
 * @param {import('@playwright/test').Page} page - The Playwright page object.
*/  

const invalidUsername = loginPage.invalidUser.username;
const invalidPassword = loginPage.invalidUser.password;
const unregisteredUsername = loginPage.unregisteredUser.username;
const unregisteredPassword = loginPage.unregisteredUser.password;
const wrongUsername = loginPage.wrongPassword.username;
const wrongPassword = loginPage.wrongPassword.password;

export async function invalidCredentialsLogin(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    await page.locator('//input[@placeholder="Username"]').fill(invalidUsername);
    await page.locator('//input[@placeholder="Password"]').fill(invalidPassword);
    await page.locator('//button[normalize-space()="Login"]').click();
    await expect(page.getByText('Required').first()).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Required').nth(1)).toBeVisible({ timeout: 3000 });
}

export async function unregisteredUserLogin(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    await page.locator('//input[@placeholder="Username"]').fill(unregisteredUsername);
    await page.locator('//input[@placeholder="Password"]').fill(unregisteredPassword);
    await page.locator('//button[normalize-space()="Login"]').click();
    await expect(page.locator('//p[normalize-space()="Invalid credentials"]')).toBeVisible({ timeout: 5000 });
}

export async function wrongPasswordLogin(page) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
    await page.locator('//input[@placeholder="Username"]').fill(wrongUsername);
    await page.locator('//input[@placeholder="Password"]').fill(wrongPassword);
    await page.locator('//button[normalize-space()="Login"]').click({ timeout: 3000 });
    await expect(page.locator('//p[normalize-space()="Invalid credentials"]')).toBeVisible({ timeout: 3000 });
}

// import { Page, expect } from '@playwright/test';
// import loginPage from '../test-data/loginPage.json';

// /**
//  * @param {import('@playwright/test').Page} page - The Playwright page object.
// */

// const username = loginPage.validUser.username;
// const password = loginPage.validUser.password;

// export async function successfulLogin(page) {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await expect(page.locator('//h5[normalize-space()="Login"]')).toBeVisible({ timeout: 3000 });
//     await page.locator('//input[@placeholder="Username"]').fill(username);
//     await page.locator('//input[@placeholder="Password"]').fill(password);
//     await page.locator('//button[normalize-space()="Login"]').click();
//     await expect(page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
// }
