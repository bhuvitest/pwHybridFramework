import { test } from "../customFixtures/leaftapsFixture"
import { updateJSONFile } from "../helpers/jsonDataHandler";
import testdata from "../data/createLeadData.json"
import { LeaftapsCreateLeadPage } from "../pages/leaftapsCreateLeadPage";
//test.use({ storageState: "logins/salesforceLogin.json" })

test.describe.serial("create Lead form data",async()=>{
    for(let data of testdata){
test(` creating Lead`, async ({ LeaftapsLogin,LeaftapsMyHome,LeaftapsHome,LeaftapsLead,LeaftapsCreateLead }) => {
    
    test.info().annotations.push(
        { type: 'TestCase', description: 'Creating Lead' },
    );
    await LeaftapsLogin.leaftapsLogin("ADMINLOGIN");
    await LeaftapsMyHome.clickCrmsfaLink()
    await LeaftapsHome.clickLead()
    await LeaftapsLead.clickCreateLeadLink()
    await LeaftapsCreateLead.firstName(data.FirstName)
    await LeaftapsCreateLead.lastName(data.LastName)
    await LeaftapsCreateLead.Company(data.CompanyName)
    await LeaftapsCreateLead.saveButton()
    await LeaftapsCreateLead.verifyTheLead(data.FirstName)
    

})
    }
})