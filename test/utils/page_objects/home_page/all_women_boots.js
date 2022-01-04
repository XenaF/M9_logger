const HomePage = require("./home_page");
const Element = require('../base_elements/base_element');


class AllWomenBootsPage extends HomePage {
    constructor() {
        super();
        this.pageTitle = new Element ('className', 'title5 result-list__toolbar__left__header hide-mobile-down');
        this.filterResult = new Element('css', '[src="https://images.dsw.com/is/image/DSWShoes/512085_001_ss_01?impolicy=colpg&imwidth=800&imdensity=1"]');
        this.addToBagButton = new Element('className', 'button button__primary');
        this.reviewAndCheckoutButton = new Element('css', 'button#atb-review-and-checkout-button.button.button__primary.ng-tns-c84-18');
        this.bagTitle = new Element('className', 'title3 checkout-banner__title');
    };

    async getTitle(element) {
       logger.info(`Title is verified`);
       return super.getTitle();
    }

    async wait(waitInMillseconds) {
        return super.wait(waitInMillseconds);
    }
}

module.exports = AllWomenBootsPage;