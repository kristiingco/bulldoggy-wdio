import AbstractPage from "./AbstractPage";

class RemindersPage extends AbstractPage {
    /**
     * Returns reminder container from the reminders page
     */
    public get remindersContent() {
        return $(".reminders-content");
    }

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

    public async assertRemindersPageIsVisible() {
        await expect(this.remindersContent).toBeDisplayed();
    }
}

export default new RemindersPage();
