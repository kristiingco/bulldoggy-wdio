import LoginPage from "../pageobjects/LoginPage";
import ReminderItemList from "../pageobjects/components/ReminderItemList";
import ReminderLists from "../pageobjects/components/ReminderLists";

describe("List Management", () => {
    before(async () => {
        await LoginPage.open("login");
        await LoginPage.login("pythonista", "I<3testing");
    });

    it("should successfully create a new list", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.assertNewListCreated("Groceries");
        await ReminderItemList.assertActiveListName("Groceries");
    });

    it("should successfully switch between two lists", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.createNewList("To Watch");
        await ReminderLists.clickListWithName("Groceries");
        await ReminderLists.assertSelectedList("Groceries");
        await ReminderItemList.assertActiveListName("Groceries");
    });

    it("should successfully edit list", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.editList("Groceries", "Books to Read");
        await ReminderLists.assertSelectedList("Books to Read");
        await ReminderItemList.assertActiveListName("Books to Read");
    });

    it("should successfully delete a list", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.createNewList("To Watch");
        await ReminderLists.deleteList("Groceries");
        await ReminderLists.assertListDoesNotExist("Groceries");
    });

    afterEach(async () => {
        await ReminderLists.deleteAllLists();
    });
});
