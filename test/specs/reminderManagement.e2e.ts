import LoginPage from "../pageobjects/LoginPage";
import ReminderItemList from "../pageobjects/components/ReminderItemList";
import ReminderLists from "../pageobjects/components/ReminderLists";

describe("Reminder Management", () => {
    before(async () => {
        await LoginPage.open("login");
        await LoginPage.login("pythonista", "I<3testing");
    });

    it("should successfully create a reminder", async () => {
        await ReminderLists.createNewList("Groceries");
        await ReminderItemList.createNewReminder("Eggs");
        await ReminderItemList.assertNewReminder("Eggs");
    });

    afterEach(async () => {
        await ReminderLists.deleteAllLists();
    });
});
