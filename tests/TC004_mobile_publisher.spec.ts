import { test } from "../customFixtures/leaftapsFixture"

test(` Mobile Publisher testCase`, async ({ SalesforceLogin, SalesforceHome, SalesforceMobilePublisher }) => {
    test.info().annotations.push(
        { type: 'TestCase', description: 'Mobile publisher multiple page' },
    );

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceLogin.verifyHomeLabel();
    await SalesforceHome.clickMobilePublisher();
    await SalesforceMobilePublisher.clickConfirmButton();
    await SalesforceMobilePublisher.clickProduct();
    await SalesforceMobilePublisher.clickAgentforce();
    await SalesforceMobilePublisher.hoverPricing();
})