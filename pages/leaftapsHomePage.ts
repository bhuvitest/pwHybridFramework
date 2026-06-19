import { BrowserContext, Page } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class LeaftapsHomePage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async clickLead() {
        await this.validateElementVisibility(selectors.leadButton, "My Lead");
        await this.click(selectors.leadButton, "My Lead", "Button");
        return this;
    }

    public async viewAll() {
        await this.waitSelector(selectors.viewAllBtn);
        await this.page.locator(selectors.viewAllBtn).highlight();
        await this.click(selectors.viewAllBtn, "View All", "Button");


    }

    public async searchApp(value: string) {
        await this.type(selectors.appItemSearchField, "Search Field", value)
    }

    public async selectApp(data: string) {
        await this.click(selectors.appOrItem(data), data, "Button")

    }

    public async clickMobilePublisher() {
        await this.childTab("//span[text()='Learn More']");
    }


}
