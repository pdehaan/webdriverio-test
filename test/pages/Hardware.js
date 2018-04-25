const Page = require('./Page');

class HardwarePage extends Page {
  get relativeUrl() {
    return '/dashboard/hardware';
  }

  open() {
    return super.open(this.relativeUrl);
  }
}

module.exports =  new HardwarePage();
