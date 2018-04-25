const Page = require('./Page');

class UserActivityPage extends Page {
  get relativeUrl() {
    return this.userActivityUrl;
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports = new UserActivityPage();
