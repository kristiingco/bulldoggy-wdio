import AbstractPage from "./AbstractPage";

class RemindersPage extends AbstractPage {
    /**
     * Returns logout button from the reminders page
     */
    public get logoutButton() {
        return $("#logout-form button[type*='submit']");
    }

    /**
     * Clicks logout button in the reminders page
     */
    public async clickLogout() {
        await this.logoutButton.click();
    }
}

export default new RemindersPage();
