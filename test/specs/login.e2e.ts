import LoginPage from "../pageobjects/LoginPage";
import RemindersPage from "../pageobjects/RemindersPage";

describe("Logging In", () => {
    beforeEach(async () => {
        await LoginPage.open("login");
    });

    it("should log in successfully", async () => {
        await LoginPage.login("pythonista", "I<3testing");
        await RemindersPage.assertRemindersPageIsVisible();
    });

    it("should log out successfully", async () => {
        await LoginPage.login("pythonista", "I<3testing");
        await RemindersPage.clickLogout();
        await LoginPage.assertLoggedOutMessage();
    });

    it("should not log in with invalid credentials", async () => {
        await LoginPage.login("invalid", "invalid");
        await LoginPage.assertErrorMessage();
    });
});
