import { Page, Locator, BrowserContext } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";


export class LeaftapsLeadPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async clickCreateLeadLink() {
        await this.validateElementVisibility(selectors.createLeadButton, "create lead Button")
        await this.click(selectors.createLeadButton, "create lead Button", "Button")
    }
    public async clickEditLeadLink(value: string) {
         await this.validateElementVisibility(selectors.editLeadButton, "Edit lead Button")
        await this.click(selectors.editLeadButton, "Edit lead Button", "Button")
    }
    public async clickDeleteLeadLink(value: string) {
         await this.validateElementVisibility(selectors.deleteLeadButton, "Delete lead Button")
        await this.click(selectors.deleteLeadButton, "Delete lead Button", "Button")
    }
    public async clickMergeLeadLink(value: string) {
         await this.validateElementVisibility(selectors.mergeLeadButton, "Merge lead Button")
        await this.click(selectors.mergeLeadButton, "Merge lead Button", "Button")
    }
    public async clickfindLeadLink(value: string) {
        await this.validateElementVisibility(selectors.findLeadButton, "Find lead Button")
        await this.click(selectors.findLeadButton, "Find lead Button", "Button")
    }



   

    public async searchLead(value: string) {
        await this.validateElementVisibility(selectors.leads.searchLeadInput, "Search Field");
        await this.typeAndEnter(selectors.leads.searchLeadInput, "Search Field", value);
    }

    public async leadID(userName: string) {
        await this.spinnerDisappear()
        await this.click(selectors.leads.userId(userName), userName, "User Name")
    }

    public async expandButton() {
        await this.click(selectors.leads.expandBtn, "Expand Button", "Button")
    }

    public async deleteLead() {
        await this.validateElementVisibility(selectors.deleteBtn, "Delete");
        await this.click(selectors.deleteBtn, "Delete", "Button");
    }

    public async deletePopUP() {
        await this.click(selectors.deletePopUp, "Delete", "Button")
    }

    public async verifiTheDeletedData() {
        await this.page.waitForLoadState('load')
        await this.verification(selectors.noItemToDisplay, "No items to display")
    }
}