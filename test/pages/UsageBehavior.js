const Page = require('./Page');

const categorySelector = 'select#category-selector option';
const dateSelector = 'select#date-selector option';

class UsageBehaviorPage extends Page {
  get relativeUrl() {
    return '/dashboard/usage-behavior';
  }

  categorySelectorOptions(page) {
    return page.elements(categorySelector).value;
  }

  dateSelectorOptions(page) {
    return page.elements(dateSelector).value;
  }

  _dateSelectorFirstDate(page) {
    return new Date(page.elements(`${dateSelector}:first-child`).getText());
  }

  _dateSelectorLastDate(page) {
    return new Date(page.elements(`${dateSelector}:last-child`).getText());
  }

  numWeeks(page) {
    const firstDate = this._dateSelectorFirstDate(page);
    const lastDate = this._dateSelectorLastDate(page);
    return Math.ceil((firstDate - lastDate) / 1000 / 60 / 60 / 24 / 7) + 1;
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports =  new UsageBehaviorPage();
