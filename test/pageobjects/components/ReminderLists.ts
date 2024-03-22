class ReminderLists {
    /**
     * Returns a list of lists from the reminders page
     */
    public get lists() {
        return $$(".reminders-list-list .reminder-row");
    }

    /**
     * Returns a new row for a new list from the reminders page
     */
    public get newListRow() {
        return $("[data-id='new-reminder-row']");
    }

    /**
     * Returns new list field from the reminders page
     */
    public get newListInput() {
        return $("[name='reminder_list_name']");
    }

    /**
     * Returns button for creating a list
     */
    public get createListButton() {
        return $(".reminder-row-with-input > img:nth-child(2)");
    }

    /**
     * Returns button for canceling list creation
     */
    public get cancelListCreationButton() {
        return $(".reminder-row-with-input > img:nth-child(3)");
    }

    /**
     * Returns a list with a specific index from the reminders page
     */
    public async getListByIndex(index: number) {
        return await this.lists[index];
    }

    /**
     * Clicks on new list row from the reminders page
     */
    public async clickNewListRow() {
        await this.newListRow.click();
    }

    /**
     * Clicks on creating a new list button from the reminders page
     */
    public async clickCreateListButton() {
        await this.createListButton.click();
    }

    public async createNewList(listName: string) {
        await this.clickNewListRow();
        await this.newListInput.setValue(listName);
        await this.clickCreateListButton();
    }
}

export default new ReminderLists();
