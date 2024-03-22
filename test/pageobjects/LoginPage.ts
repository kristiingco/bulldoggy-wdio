import AbstractPage from "./AbstractPage";

class LoginPage extends AbstractPage {
    /**
     * Returns username field from login page
     */
    public get usernameInput() {
        return $("[name='username']");
    }

    /**
     * Returns password field from login page
     */
    public get passwordInput() {
        return $("[name='password']");
    }

    /**
     * Returns login button from login page
     */
    public get loginButton() {
        return $("[data-testid='login-button']");
    }

    /**
     * Returns error message from login page
     */
    public get errorMessage() {
        return $(".invalid-login-warning");
    }

    /**
     * Returns logged out message from login page
     */
    public get loggedOutMessage() {
        return $(".invalid-login-warning");
    }

    /**
     * Clicks on login button in the login page
     */
    public async clickLoginButton() {
        await this.loginButton.click();
    }

    /**
     * Asserts the error message contains expected text
     */
    public async assertErrorMessage() {
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining("Invalid login! Please retry.")
        );
    }

    /**
     * Asserts the logged out message contains expected text
     */
    public async assertLoggedOutMessage() {
        await expect(this.loggedOutMessage).toHaveText(
            expect.stringContaining("Successfully logged out.")
        );
    }

    /**
     * Logs in to the application
     * @param username - username to be typed into the username field
     * @param password - password to be typed into the password field
     */
    public async login(username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.clickLoginButton();
    }
}

export default new LoginPage();
