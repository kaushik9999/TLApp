const loginPage = require('../../pages/page_objects/loginPage.js');
const landingPage = require('../../pages/page_objects/landingPage.js');
const itemPurchasePage = require('../../pages/page_objects/itemPurchasePage.js');


describe('TimeLess Tests', ()=>{

   // THIS TEST LOGIN TO THE APP AND VERIFIES SUCCESSFUL LOGIN
    it('Verify Successful Login', async()=>{
         await loginPage.getSkipLink.click();
         await loginPage.loginTab.click();
         await loginPage.loginWithEmailTab.click();
         await loginPage.emailField.setValue('kaushik@explore.com');
         await loginPage.passwordField.waitForExist();
         await loginPage.passwordField.setValue('TestApp0');
         await loginPage.loginButton.click();// Login
         await landingPage.collapseButton.waitForExist(1000);
         await landingPage.collapseButton.click();
         const exists = await landingPage.landingPageTitle.isDisplayed();// Validate Successful Login
         expect(exists).toBe(true);
    });

    // THIS TEST CREATES AND VERIFIES A DROP PRICE ALERT
    it('Verify Drops - Set Price Alert ', async()=>{
            await landingPage.searchByAsset.click();
            await landingPage.searchByAssetType.setValue('Nike Travis Scott');// Search for the item
            await landingPage.searchItem('10 of the legendary Travis Scott Jordan 1').click();// Find Item
            await landingPage.setPriceAlertButton.click();
            await landingPage.priceAlertLessTenPercent.click();// Click -10%
            await landingPage.setPriceAlertButton.click();// click set price alert button
            await driver.back();
            await driver.back();// Navigate Back
            await landingPage.getTradingButton.click();
            await landingPage.getPriceAlertsButton.waitForExist();
            await landingPage.getPriceAlertsButton.click();
            const exists = await landingPage.searchItem('10 of the legendary Travis Scott Jordan 1').isDisplayed();// Validate created price alert
            expect(exists).toBe(true);
            await landingPage.getDeleteButtonIcon.click();
            await landingPage.getDeleteAlertButton.click();
            await driver.back();
    });

    // THIS VERIFIES ERROR CODE IN PURCHASE ITEM FLOW AFTER ADDING CREDIT CARD INFO
    it('Verify Drops - Purchase item test  ', async()=>{
            await driver.back();
            await driver.back();
            await landingPage.getDropsButton.click();
            await landingPage.searchByAsset.click();
            await landingPage.searchByAssetType.setValue("Nike SB Dunk");
            await landingPage.searchItem("Nike SB Dunk High Pro 'FLOM' + Skatedeck").click();
            await itemPurchasePage.getBuyFractionsButton.click();
            await itemPurchasePage.setBuyFractionsValue("2").click();
            await itemPurchasePage.getTermsAndConditionsCheckbox.click();
            await itemPurchasePage.getBuyFractionsButtonNext.click();
            await itemPurchasePage.getEnterCardNumber.click();
            await itemPurchasePage.getEnterCardNumber.setValue("4000000400000008");
            await itemPurchasePage.getEnterCardDate.setValue("02/25");
            await itemPurchasePage.getEnterCardCvv.setValue("333");
            await itemPurchasePage.getEnterPostelCode.setValue("33");
            await itemPurchasePage.getEnterCheckboxBelowPostelCode.click();
            await driver.hideKeyboard();
            await itemPurchasePage.getPriceButton.click();
            var text = await itemPurchasePage.getErrorMessage.getText();
            expect(text).toBe("Your card was declined. Your request was in live mode, but used a known test card.");

    });

});







