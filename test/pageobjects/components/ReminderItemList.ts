class ReminderItemList {
    /**
     * Returns name of active list from reminders page
     */
    public get activeListName() {
        return $(".reminders-content-items h3.reminders-card-title");
    }

    /**
     * Returns new reminder field from reminders page
     */
    public get newReminderInput() {
        return $("[name='reminder_item_name']");
    }

    public get confirmButton() {
        return $(".reminder-row-with-input > img:nth-child(2)");
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
