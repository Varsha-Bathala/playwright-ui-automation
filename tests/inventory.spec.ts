import { test, expect } from '../fixtures/fixtures';
import { users } from '../utils/testData';
test.beforeEach(async ({ loginPage }) => {

    await loginPage.navigate();

   await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
);
});

test('Add Product To Cart', async ({ inventoryPage }) => {

    await inventoryPage.addBackpackToCart();

    await expect(
        inventoryPage.cartBadge()
    ).toHaveText('1');
});

test('Add Multiple Products', async ({ inventoryPage }) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await expect(
        inventoryPage.cartBadge()
    ).toHaveText('2');
});

test('Remove Product From Cart', async ({
    inventoryPage,
    cartPage
}) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.removeProduct();

    await expect(
        cartPage.cartItems()
    ).toHaveCount(0);
});