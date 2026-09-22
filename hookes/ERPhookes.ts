import { test as base, expect } from "@playwright/test";
import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { adminLogOut } from "../Pages/AdminLogout";

export const test = base;

test.beforeEach(async ({ page }) => {
    const loginPage = new AdminLoginPage(page);
    const baseUrl = process.env.BASE_URL;
    const username = process.env.BASE_USER;
    const password = process.env.BASE_PASS;

    if (!baseUrl) {
        throw new Error("BASE_URL environment variable is not set");
    }
    if (!username || !password) {
        throw new Error("BASE_USER and BASE_PASS environment variables are not set");
    }

    await loginPage.launchUrl(baseUrl);
    await loginPage.ERPLogin(username, password);
});

test.afterEach(async ({ page }) => {
    const logoutPage = new adminLogOut(page);
    await logoutPage.ERPlogout();
});

export { expect };
