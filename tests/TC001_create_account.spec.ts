import { test } from "../customFixtures/leaftapsFixture"
import { FakerData } from "../helpers/fakerUtils"
import { readDataFromCSV } from '../helpers/csvUtil';
import { updateJSONFile } from "../helpers/jsonDataHandler";
import { accountData } from "../data/account.interface";
const csvFilePath = './data/accounts.csv';

//test.use({ storageState: "./logins/testleafLogin.json" })
test('Creating an Local storage', async ({ LeaftapsLogin}) => {
    const data = await readDataFromCSV(csvFilePath);
    test.info().annotations.push(
        { type: 'TestCase', description: 'Creating an Account Using CSV Data' },
        { type: 'Test Description', description: "Creating Valid account for budget calculation" }
    );

    for(const row of data) {
        const { Rating, Type, Industry, Ownership, BillingStreet, BillingCity, PostalCode, BillingState, BillingCountry } = row;
        const acctName = FakerData.getRandomTitle();
       updateJSONFile<accountData>("../data/accountdata.json", { TC001: acctName});
        await LeaftapsLogin.leaftapsLogin("ADMINLOGIN");
    }
});