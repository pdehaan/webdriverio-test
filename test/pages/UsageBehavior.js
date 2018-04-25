const Page = require('./Page');

const dateSelector = 'select#date-selector option';

class UsageBehaviorPage extends Page {
  get relativeUrl() {
    return '/dashboard/usage-behavior';
  }

  get categorySelector() {
    return browser.elements('select#category-selector option').value;
  }

  get dateSelectorOptions() {
    return browser.elements(dateSelector).value;
  }

  get numWeeks() {
    const firstDate = this._dateSelectorFirstDate();
    const lastDate = this._dateSelectorLastDate();
    return Math.ceil((firstDate - lastDate) / 1000 / 60 / 60 / 24 / 7) + 1;
  }

  _dateSelectorFirstDate() {
    return new Date(browser.elements(`${dateSelector}:first-child`).getText());
  }

  _dateSelectorLastDate() {
    return new Date(browser.elements(`${dateSelector}:last-child`).getText());
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports =  new UsageBehaviorPage();
