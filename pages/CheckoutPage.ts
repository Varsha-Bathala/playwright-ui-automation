import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        zipCode: string
    ) {

        await this.page.locator('#first-name').fill(firstName);

        await this.page.locator('#last-name').fill(lastName);

        await this.page.locator('#postal-code').fill(zipCode);
    }

    async continueCheckout() {

        await this.page.locator('#continue').click();
    }

    async finishOrder() {

        await this.page.locator('#finish').click();
    }

    successMessage() {

        return this.page.locator('.complete-header');
    }
    errorMessage() {

    return this.page.locator('[data-test="error"]');

    }
}
