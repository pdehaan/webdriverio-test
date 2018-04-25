const { config } = require('../../wdio.conf');

class Page {
  constructor() {
    this.relativeUrl;
    this.baseUrl = config.baseUrl;
    this.homepageUrl = '/';
    this.userActivityUrl = '/dashboard/user-activity';
    this.usageBehaviorUrl = '/dashboard/usage-behavior';
    this.hardwareUrl = '/dashboard/hardware';
    this.nextPageButton = '.next-button a';
    this.title = 'Firefox Public Data Report';
    this._pageLinkUrl = (url) => `[href='${url || this.relativeUrl}']`;
  }

  get canonicalUrl() {
    return `${this.baseUrl}${this.relativeUrl}`;
  }

  get pageLinkUrl() {
    return this._pageLinkUrl();
  }

  clickUserActivityLink() {
    return browser.click(this._pageLinkUrl(this.userActivityUrl));
  }

  clickUsageBehaviorLink() {
    return browser.click(this._pageLinkUrl(this.usageBehaviorUrl));
  }

  clickHardwareLink() {
    return browser.click(this._pageLinkUrl(this.hardwareUrl));
  }

  clickNextPageButton() {
    return browser.click(this.nextPageButton);
  }

  open(path) {
    return browser.url(path);
  }
}

module.exports = Page;
