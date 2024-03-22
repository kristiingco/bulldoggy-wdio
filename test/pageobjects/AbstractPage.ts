export default class AbstractPage {
    /**
     * Opens a sub page of the page
     * @param path - path of the sub page (e.g. /path/to/page.html)
     */
    public async open(path: string) {
        await browser.url(`/${path}`);
    }

    /**
     * Set browser resolution
     * @param width - width for new resolution
     * @param height - height for new resolution
     */
    public async setResolution(width: number, height: number) {
        await browser.setWindowSize(width, height);
    }

    /**
     * Takes a screenshot of the screen
     * @param path - path to save screenshot
     */
    public async takeScreenshot(path: string) {
        await browser.saveScreenshot(path);
    }
}
