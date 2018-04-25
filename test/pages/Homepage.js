const Page = require('./Page');

class Homepage extends Page {
  get relativeUrl() {
    return this.homepageUrl;
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports = new Homepage();
