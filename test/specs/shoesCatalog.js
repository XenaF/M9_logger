// const expect = require('chai').expect;
const HomePage = require('../utils/page_objects/home_page/home_page');
const Filter = require('../utils/page_objects/base_page/filter');
const AllWomenBootsPage = require('../utils/page_objects/home_page/all_women_boots');
const BagPage = require('../utils/page_objects/home_page/bag_page');
 
 describe('find womens shoes in the catalog', function(){

    it('filter by women shoes', async function() {
        let homePage = new HomePage();
        await homePage.open();
        await homePage.headerNavigationList.clickElementByText('Women');
        await homePage.expandedHeaderNavigationList.clickElementByText('All Women\'s Boots');
        let allWomenBootsPage = new AllWomenBootsPage();
        expect(allWomenBootsPage.getTitle(allWomenBootsPage.pageTitle)).toEqual('ALL WOMEN\'S BOOTS');
    });

    it('filter by conditions', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await allWomenBootsPage.wait(10000);
        let filter = new Filter();
        await filter.filterSizeValues.clickElementByText('3');
        await allWomenBootsPage.wait(10000);
        await filter.filterColorMenu.clickElementByText('COLOR');
        await filter.filterColorValues.clickElementByText('Black');
        let filterResult = new Filter();
        expect(filterResult.getText()).toEqual('Black', '3');
    });

    it('My bag page is displayed', async function() {
        let allWomenBootsPage = new AllWomenBootsPage();
        await allWomenBootsPage.wait(10000);
        await allWomenBootsPage.filterResult.click();
        await allWomenBootsPage.wait(10000);
        await allWomenBootsPage.addToBagButton.scrollToElement('button#add-to-bag-button.button.button__primary');
        await allWomenBootsPage.wait(10000);
        await allWomenBootsPage.addToBagButton.click();
        await allWomenBootsPage.wait(10000);
        await allWomenBootsPage.reviewAndCheckoutButton.clickByButtonText('REVIEW BAG AND CHECKOUT');
        await allWomenBootsPage.wait(10000);
        let bagPage = new BagPage();
        expect(bagPage.getTitle(bagPage.bagPageTitle)).toEqual('MY BAG');
        expect(bagPage.productDetails.isDisplayed()).toBeTruthy();
        });

 it('Paypal non-Angular action', async function() {
    let bagPage = new BagPage();
    await bagPage.payPalButton.click();
    await bagPage.wait(10000); 
    await bagPage.payPalButton.clickByLinkText('Cancel and return to DSW');
    expect(bagPage.getTitle(bagPage.bagPageTitle)).toEqual('MY BAG');
});
 });

 
  