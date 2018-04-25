const Page = require('./Page');

class UserActivityPage extends Page {
  get relativeUrl() {
    return '/dashboard/user-activity';
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports = new UserActivityPage();
