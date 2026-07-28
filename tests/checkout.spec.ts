import { test, expect } from '../fixtures/fixtures';
import { users, customer } from '../utils/testData';
test.beforeEach(async ({ loginPage }) => {

    await loginPage.navigate();

   await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
);
});

test('Complete Checkout', async ({
    inventoryPage,
    cartPage,
    checkoutPage
}) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

   await checkoutPage.enterCustomerDetails(
    customer.firstName,
    customer.lastName,
    customer.zipCode
);

    await checkoutPage.continueCheckout();

    await checkoutPage.finishOrder();

    await expect(
        checkoutPage.successMessage()
    ).toHaveText(
        'Thank you for your order!'
    );
});
test('Checkout Without First Name', async ({
    inventoryPage,
    cartPage,
    checkoutPage
}) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCustomerDetails(
        '',
        'Bhavan',
        '75001'
    );

    await checkoutPage.continueCheckout();

    await expect(
        checkoutPage.errorMessage()
    ).toContainText(
        'First Name is required'
    );

});