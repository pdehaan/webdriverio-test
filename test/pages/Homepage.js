const Page = require('./Page');

class Homepage extends Page {
  get relativeUrl() {
    return '/';
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports = new Homepage();
