class ReminderItemList {
    /**
     * Returns name of active list from reminders page
     */
    public get activeListName() {
        return $(".reminders-content-items h3.reminders-card-title");
    }

    /**
     * Returns all reminders from the active list
     */
    public get allReminders() {
        return $$(".reminders-item-list .reminder-row:not(.light-gray-text)");
    }

    /**
     * Returns new reminder row from reminders page
     */
    public get newReminderRow() {
        return $("[data-id='new-reminder-item-row']");
    }

    /**
     * Returns new reminder field from reminders page
     */
    public get newReminderInput() {
        return $("[name='reminder_item_name']");
    }

    /**
     * Returns confirm button for reminder creation or editing
     */
    public get confirmButton() {
        return $(".reminder-row-with-input > img:nth-child(2)");
    }

    /**
     * Returns cancel button for reminder creation or editing
     */
    public get cancelButton() {
        return $(".reminder-row-with-input > img:nth-child(3)");
    }

    /**
     * Creates a new reminder in the active list
     * @param reminder - reminder to add to active list
     */
    public async createNewReminder(reminder: string) {
        await this.newReminderRow.click();
        await this.newReminderInput.setValue(reminder);
        await this.confirmButton.click();
    }

    /**
     * Asserts a new reminder has been created with the expected name
     * @param reminder - expected name of reminder
     */
    public async assertNewReminder(reminder: string) {
        const newReminderText =
            this.allReminders[(await this.allReminders.length) - 1].$("p");
        await expect(newReminderText).toHaveText(reminder);
    }

    /**
     * Asserts if active list has the expected list name
     * @param listName - expected name of active list
     */
    public async assertActiveListName(listName: string) {
        await expect(this.activeListName).toHaveText(listName);
    }
}

export default new ReminderItemList();
