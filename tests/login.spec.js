import { test, expect } from '@playwright/test';
import { successfulLogin } from './reusable_functions/successful_login.js';
import { successfulLogout } from './reusable_functions/successful_logout.js';
import { invalidCredentialsLogin, unregisteredUserLogin, wrongPasswordLogin } from './reusable_functions/failed_login.js';
import { resetPassword } from './reusable_functions/reset_password.js';

test('TC-LOG-001: Verify successful login', async ({ page }) => {
    await successfulLogin(page);
});

test('TC-LOG-002: Verify invalid login', async ({ page }) => {
    await invalidCredentialsLogin(page);
});

test('TC-LOG-003: Verify login with non-registered username', async ({ page }) => {
    await unregisteredUserLogin(page);
});

test('TC-LOG-004: Verify login with invalid password', async ({ page }) => {
    await wrongPasswordLogin(page);
});

test('TC-LOG-005: Verify successful logout', async ({ page }) => {
    await successfulLogin(page);
    await successfulLogout(page);
});

test('TC-FPW-001: Verify that user is able to access forgot password feature', async ({ page }) => {
    await resetPassword(page);
});