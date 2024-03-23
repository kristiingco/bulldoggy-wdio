import LoginPage from "../pageobjects/LoginPage";
import ReminderLists from "../pageobjects/components/ReminderLists";

describe("Reminder Management", () => {
    before(async () => {
        await LoginPage.open("login");
        await LoginPage.login("pythonista", "I<3testing");
    });

    it("should successfully create a reminder", async () => {
        await ReminderLists.createNewList("Groceries");
    });

    afterEach(async () => {
        await ReminderLists.deleteAllLists();
    });
});
