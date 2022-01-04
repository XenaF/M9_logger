const { browser } = require("protractor");
const logger = require('../../../config/logger.conf.js');

class Collection {
     constructor(selectorType, selector) {
        if (selectorType === 'css') {
            this.collection = element.all(by.css(selector));
        } else  if (selectorType === 'className') {
            this.collection = element.all(by.className(selector));
        } else {
            this.collection = element.all(by.xpath(selector));
        }
    };

    async getText() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of collection's elements are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
        
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection;
        let arrayOfTexts = [];
        for (let i = 0; i < arrayOfElementTexts.length; i++ ) {
            arrayOfTexts.push(await arrayOfElementTexts[i].getText());
        }
        const elementToClickIndex = arrayOfTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        logger.info(`Clicking "${textToClick}" text"`);
        try {
            await this.collection.get(elementToClickIndex).click();
        }
        catch(StaleElementReferenceError) {
            await this.collection.get(elementToClickIndex).click();
        }
        
    }
}
module.exports = Collection;