import LoginPage from "../pageobjects/LoginPage";
import ReminderLists from "../pageobjects/components/ReminderLists";

describe("List Management", () => {
    before(async () => {
        await LoginPage.open("login");
        await LoginPage.login("pythonista", "I<3testing");
    });

    it("should successfully create a new list", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.assertNewListCreated("Groceries");
    });

    it("should successfully switch between two lists", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderLists.createNewList("To Watch");
        await ReminderLists.clickListWithName("Groceries");
        await ReminderLists.assertSelectedList("Groceries");
    });

    afterEach(async () => {
        await ReminderLists.deleteAllLists();
    });
});
