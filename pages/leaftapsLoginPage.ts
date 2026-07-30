import { BrowserContext, Page } from "@playwright/test";
import { PlaywrightWrapper } from "../helpers/playwright";
import { credentials } from "../constants/credentialData";
import { expect } from "playwright/test";
import { URLConstants } from "../constants/urlConstants";
import { selectors } from "./selectors";

export class LeaftapsLoginPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }


    public async leaftapsLogin(role: string) {

        const { username, password } = credentials[role];

        await this.loadApplication(URLConstants.adminURL)
        const pageTitle = await this.page.title();
        if (pageTitle.startsWith("Leaftaps")) {
            await this.type(selectors.username, "Username", username);
            await this.type(selectors.password, "password", password);
            await this.interactWithElement('CLASS', selectors.loginBtn,'click');
            await this.wait('mediumWait')
        } else {
            console.log("Login page is Skipped");

        }
    }

    public async saveLoginState(){
        await this.storeState("./logins/leaftapsLogin.json")
    }
}
