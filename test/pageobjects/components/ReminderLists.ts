class ReminderLists {
    /**
     * Returns a list of lists from the reminders page
     */
    public get lists() {
        return $$(".reminders-list-list .reminder-row:not(.light-gray-text)");
    }

    /**
     * Returns selected list from the reminders page
     */
    public get selectedList() {
        return $(".reminders-list-list .reminder-row.selected-list");
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
    public get confirmButton() {
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
     * Returns a list with a specific title from the reminders page
     * @param listName - name of list to select
     */
    public async getListByName(listName: string) {
        return await $(`//p[contains(text(), "${listName}")]`);
    }

    /**
     * Clicks on a list with a specific title from the reminders page
     * @param listName - name of list to select
     */
    public async clickListWithName(listName: string) {
        await (await this.getListByName(listName)).click();
    }

    /**
     * Clicks on new list row from the reminders page
     */
    public async clickNewListRow() {
        await this.newListRow.click();
    }

    /**
     * Clicks on confirm button from the reminders page
     */
    public async clickConfirmButton() {
        await this.confirmButton.click();
    }

    /**
     * Creates a new list
     * @param listName - name for newly created list
     */
    public async createNewList(listName: string) {
        await this.clickNewListRow();
        await this.newListInput.setValue(listName);
        await this.clickConfirmButton();
    }

    /**
     * Edits a list
     * @param oldListName - name of list to edit
     * @param newListName - new name of list to edit
     */
    public async editList(oldListName: string, newListName: string) {
        const listToEdit = await $(
            `//div[contains(@class, 'reminder-row')][p[contains(text(), "${oldListName}")]]`
        );
        await listToEdit.$("img:nth-child(2)").click();
        const editNameInput = await $("[name='new_name']");
        await editNameInput.setValue(newListName);
        this.clickConfirmButton();
    }

    /**
     * Deletes all created lists
     */
    public async deleteAllLists() {
        await this.lists.forEach(async (element) => {
            await element.$("img:nth-child(3)").click();
        });
    }

    /**
     * Asserts a list with the given title has been selected
     * @param listName - expected name for selected list
     */
    public async assertSelectedList(listName: string) {
        await expect(this.selectedList).toHaveText(listName);
    }

    /**
     * Asserts a new list has been created correctly
     * @param listName - name for newly created list
     */
    public async assertNewListCreated(listName: string) {
        await expect(this.selectedList).toHaveText(listName);
    }
}

export default new ReminderLists();
