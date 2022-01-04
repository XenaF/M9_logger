const BasePage = require('../base_page/base_page');
const Collection = require('../base_elements/base_collection');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.dsw.com/en/us/';
        this.headerNavigationList = new Collection('className', 'header-navigation-list__component ng-tns-c129-2 ng-star-inserted');
        this.expandedHeaderNavigationList = new Collection('className', 'header-link-group__links__link ng-tns-c126-4 ng-star-inserted');
    };

    async open() {
        await super.open(this.url);
    }

    async wait(waitInMillseconds) {
        return super.wait(waitInMillseconds);
    }
    
    async getTitle(element) {
        const homeTitle = await super.getTitle();
        return homeTitle;
     }
};

module.exports = HomePage;