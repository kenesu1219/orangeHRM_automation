import test, { page, expect } from '@playwright/test'

test('Assertions Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com')
    await page.pause()

    // ASSERTIONS
    // ** 5. Element is Visible or not **
    // await expect(page.locator('')).
    // await expect(page.locator('')).

    // ** 1. Element is Present or not **
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    // await page.$ -- discouraged in checking or asserting
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();
    }
    // ** 2. Element is Visible or Hidden **
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    // await expect(page.locator('text=The Kitchen')).toBeHidden();

    // ** 3. Element is Enabled or Disabled **
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect(page.locator('text=The Kitchen')).toBeDisabled();

    // ** 4. Text value matches or not **
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    // await expect(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen');

    // ** 5. Attribute value **
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    // ** 6. URL value **
    await expect(page).toHaveURL(/kitchen.applitools.com/);

    // ** 7. Title value **
    await expect(page).toHaveTitle(/.*Kitchen/);

    // ** 8. Page matches screenshot **
    await expect(page).toHaveScreenshot()
    
})