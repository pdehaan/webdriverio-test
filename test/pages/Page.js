const {config} = require('../../wdio.conf');

class Page {
  constructor() {
    this.baseUrl = config.baseUrl;
    this.relativeUrl;
    this.nextPageButton = '.next-button a';
    this.title = 'Firefox Public Data Report';
  }

  get canonicalUrl() {
    return `${this.baseUrl}${this.relativeUrl}`;
  }

  get pageLinkUrl() {
    return `[href='${this.relativeUrl}']`;
  }

  open(path) {
    return browser.url(path);
  }
}

module.exports = Page;
