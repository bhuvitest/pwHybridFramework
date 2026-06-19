import { test as baseTest } from '@playwright/test'
import { LeaftapsHomePage } from '../pages/leaftapsHomePage'
import { LeaftapsMyHomePage } from '../pages/leaftapsMyHomePage'
import { LeaftapsLeadPage } from '../pages/leaftapsLeadPage'
import { LeaftapsCreateLeadPage } from '../pages/leaftapsCreateLeadPage'
import { LeaftapsEditLeadPage } from '../pages/leaftapsEditLeadPage'
import { LeaftapsDeleteLeadPage } from '../pages/leaftapsDeleteLeadPage'
import { LeaftapsMergeLeadPage } from '../pages/leaftapsMergeLeadPage'
import { LeaftapsFindLeadPage } from '../pages/leaftapsFindLeadPage'
import { LeaftapsLoginPage } from '../pages/leaftapsLoginPage'

type leaftapsFixture = {
    LeaftapsHome: LeaftapsHomePage
    LeaftapsMyHome: LeaftapsMyHomePage
    LeaftapsLead: LeaftapsLeadPage
    LeaftapsCreateLead: LeaftapsCreateLeadPage
    LeaftapsEditLead: LeaftapsEditLeadPage
    LeaftapsDeleteLead: LeaftapsDeleteLeadPage
    LeaftapsMergeLead: LeaftapsMergeLeadPage
    LeaftapsFindLead: LeaftapsFindLeadPage
    LeaftapsLogin: LeaftapsLoginPage
    
}

export const test = baseTest.extend<leaftapsFixture>({

    LeaftapsLogin: async ({ page, context }, use) => {
        const leaftapsLogin = new LeaftapsLoginPage(page, context);
        await use(leaftapsLogin);
    },

    LeaftapsHome: async ({ page, context }, use) => {
        const leaftapsHome = new LeaftapsHomePage(page, context);
        await use(leaftapsHome);
    },
     LeaftapsMyHome: async ({ page, context }, use) => {
        const leaftapsMyHome = new LeaftapsMyHomePage(page, context);
        await use(leaftapsMyHome);
    },

    LeaftapsLead: async ({ page, context }, use) => {
        const leaftapsLead = new LeaftapsLeadPage(page, context);
        await use(leaftapsLead)
    },
     LeaftapsCreateLead: async ({ page, context }, use) => {
        const leaftapsCreateLead = new LeaftapsCreateLeadPage(page, context);
        await use(leaftapsCreateLead)
    },
     LeaftapsEditLead: async ({ page, context }, use) => {
        const leaftapsEditLead = new LeaftapsEditLeadPage(page, context);
        await use(leaftapsEditLead)
    },
     LeaftapsDeleteLead: async ({ page, context }, use) => {
        const leaftapsDeleteLead = new LeaftapsDeleteLeadPage(page, context);
        await use(leaftapsDeleteLead)
    },
     LeaftapsMergeLead: async ({ page, context }, use) => {
        const leaftapsMergeLeadPage = new LeaftapsMergeLeadPage(page, context);
        await use(leaftapsMergeLeadPage)
    },
     LeaftapsFindLead: async ({ page, context }, use) => {
        const leaftapsFindLead = new LeaftapsFindLeadPage(page, context);
        await use(leaftapsFindLead)
    },

    // SalesforceAccount: async ({ page, context }, use) => {
    //     const SalesforceAccount = new SalesforceAccountPage(page, context);
    //     await use(SalesforceAccount)
    // },
    // SalesforceMobilePublisher: async ({ page, context }, use) => {
    //     const SalesforceMobilePublisher = new SalesforceMobilePublisherPage(page, context);
    //     await use(SalesforceMobilePublisher);
    // },


})
/* test.beforeAll(async ({ SalesforceLogin }) => {
    await SalesforceLogin.salesforceLogin("ADMINLOGIN")
});
 */
/* test.afterEach(async ({}, testInfo) => {
    jiraIssueKey = await logADefectInJira(testInfo);
});

test.afterAll(async ({}) => {
   const filePath= process.cwd()
   const resultFile=await glob(filePath+"/test-results",{absolute:true})
   console.log(resultFile)
    if (jiraIssueKey && resultFile.length> 0) {
        await updateJiraIssue(jiraIssueKey,resultFile[0]); // Replace with the actual folder path
    }
}); */

