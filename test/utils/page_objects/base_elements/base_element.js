const { browser } = require("protractor");
const logger = require('../../../config/logger.conf.js');

class Element {
    constructor (selectorType, selector) {
        if (selectorType === 'css') {
            this.element = element(by.css(selector));
        } else if (selectorType === 'className') {
            this.element = element(by.className(selector));
        } else {
           this.element = element(by.xpath(selector));
        }
    };

    async click() {
        logger.info(`Clicking "${this.element}"`);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.element), 5000);
        await this.element.click();
    };

    async getText() {
        logger.info(`Texts of collection's elements`);
        const textElement = await this.element.getText();
        return textElement;
    };

    async scrollToElement(element) {
        logger.info(`Scrolling to element`);
        var scrolldown = await $$(element).get(0);
        await browser.controlFlow().execute(function() {
        browser.executeScript('arguments[0].scrollIntoView(true)', scrolldown.getWebElement());
      });
    await browser.sleep(10000);
    };

    async clickByButtonText(element) {
        let resultingButton = await browser.element(by.buttonText(element));
        logger.info(`Click by "${resultingButton}"`);
        return resultingButton.click();
    }

    async isDisplayed() {
        return this.element.isDisplayed();

    }
    async clickByLinkText(element) {
        let resultingLink = await browser.element(by.linkText(element));
        logger.info(`Click by "${resultingLink}"`);
         await resultingLink.click();
     }
};

module.exports = Element;