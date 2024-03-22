class ReminderLists {
    /**
     * Returns a list of lists from the reminders page
     */
    public get lists() {
        return $$(".reminders-list-list .reminder-row");
    }

    /**
     * Returns a list with a specific index from the reminders page
     */
    public async getListByIndex(index: number) {
        return await this.lists[index];
    }
}

export default new ReminderLists();
