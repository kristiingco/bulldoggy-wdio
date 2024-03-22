import LoginPage from "../pageobjects/LoginPage";

describe("List Management", () => {
    before(async () => {
        await LoginPage.open("login");
        await LoginPage.login("pythonista", "I<3testing");
    });
});
