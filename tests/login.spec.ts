import { test, expect } from '../fixtures/fixtures';
import { users } from '../utils/testData';
test('Valid Login', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
);

    await expect(loginPage.page).toHaveURL(/inventory.html/);
});

test('Invalid Login', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
    users.invalidUser.username,
    users.invalidUser.password
);

    await expect(
        loginPage.getErrorMessage()
    ).toContainText(
        'Username and password do not match'
    );
});

test('Locked User Login', async ({ loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
    users.lockedUser.username,
    users.lockedUser.password
);

    await expect(
        loginPage.getErrorMessage()
    ).toContainText(
        'Sorry, this user has been locked out.'
    );
});