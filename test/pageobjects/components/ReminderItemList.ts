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
     * Returns edit reminder field from reminders page
     */
    public get editReminderInput() {
        return $("[name='new_description']");
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
     * Clicks on confirm button
     */
    public async clickConfirmButton() {
        await this.confirmButton.click();
    }

    /**
     * Gets reminder by a specified name
     * @param reminder - name of reminder to get
     */
    public async getReminderByName(reminder: string) {
        return $(
            `//div[contains(@class, 'reminder-row')][p[contains(text(), "${reminder}")]]`
        );
    }

    /**
     * Creates a new reminder in the active list
     * @param reminder - reminder to add to active list
     */
    public async createNewReminder(reminder: string) {
        await this.newReminderRow.click();
        await this.newReminderInput.setValue(reminder);
        await this.clickConfirmButton();
    }

    /**
     * Edits an existing reminder
     * @param oldReminder - name of existing reminder to edit
     * @param newReminder - new name of reminder
     */
    public async editReminder(oldReminder: string, newReminder: string) {
        const reminderToEdit = await this.getReminderByName(oldReminder);
        await reminderToEdit.$("img:nth-child(2)").click();
        await this.editReminderInput.setValue(newReminder);
        await this.clickConfirmButton();
    }

    /**
     * Completes reminder
     * @param reminder - name of reminder to complete
     */
    public async completeReminder(reminder: string) {
        (await this.getReminderByName(reminder)).$("p").click();
    }

    /**
     * Asserts a reminder with the given name exists
     * @param reminder - name of reminder expected to exist
     */
    public async assertReminderExists(reminder: string) {
        await expect(this.getReminderByName(reminder)).toExist();
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
     * Asserts a reminder is completed
     * @param reminder - name of reminder to complete
     */
    public async assertReminderCompleted(reminder: string) {
        await expect(this.getReminderByName(reminder)).toHaveElementClass(
            expect.stringContaining("completed")
        );
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
