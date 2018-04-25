const Page = require('./Page');

const dateSelector = 'select#date-selector option';

class UsageBehaviorPage extends Page {
  get relativeUrl() {
    return this.usageBehaviorUrl;
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
    return Math.ceil((firstDate - lastDate) / 1000/*ms*/ / 60/*sec*/  / 60/*min*/ / 24/*hours*/ / 7/*days*/) + 1;
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

module.exports = new UsageBehaviorPage();
