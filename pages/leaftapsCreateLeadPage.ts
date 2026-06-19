import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";


export class LeaftapsCreateLeadPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
    
     public async firstName(value: string) {
        await this.type(selectors.leads.firstNameInput, "First Name", value)
    }

    public async lastName(value: string) {
        await this.type(selectors.leads.lastNameInput, "Last Name", value)
    }


    public async Company(value: string) {
        await this.type(selectors.leads.companyInput, "Last Name", value)
    }

    public async saveButton() {
        await this.forceClick(selectors.leads.creatLeadSaveBtn, "Save", "Button")
    }

    public async verifyTheLead(expectedValue: string) {
        await this.validateElementVisibility(selectors.leads.verificationText, "Lead Name")
        const leadName = await this.getInnerText(selectors.leads.verificationText)
        console.log(leadName);
        await this.verification(selectors.leads.verificationText, expectedValue)
    }
}