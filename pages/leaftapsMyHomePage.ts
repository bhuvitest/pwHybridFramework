import { BrowserContext, Page } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class LeaftapsMyHomePage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async clickCrmsfaLink() {
		 await this.click(selectors.crmsfaLink, "New", "Button");	
         return this;
	}


}
