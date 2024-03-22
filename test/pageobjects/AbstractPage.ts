export default class AbstractPage {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public async open(path: string) {
        await browser.url(`/${path}`);
    }
}
