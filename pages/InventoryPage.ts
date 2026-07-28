import { Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    async addBackpackToCart() {

        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();
    }

    async addBikeLightToCart() {

        await this.page
            .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
            .click();
    }

    async openCart() {

        await this.page
            .locator('.shopping_cart_link')
            .click();
    }

    cartBadge() {

        return this.page.locator('.shopping_cart_badge');
    }
}