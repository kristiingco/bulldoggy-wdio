class ReminderItemList {
    /**
     * Returns name of active list in reminders page
     */
    public get activeListName() {
        return $(".reminders-content-items h3.reminders-card-title");
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
