import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async clickCheckout() {

        await this.page.locator('#checkout').click();
    }

    async removeProduct() {

        await this.page
            .locator('[data-test="remove-sauce-labs-backpack"]')
            .click();
    }

    cartItems() {

        return this.page.locator('.cart_item');
    }
}