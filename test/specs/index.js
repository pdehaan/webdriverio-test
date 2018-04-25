const { assert } = require('chai');

const Homepage = require('../pages/Homepage');
const UserActivityPage = require('../pages/UserActivity');
const UsageBehaviorPage = require('../pages/UsageBehavior');
const HardwarePage = require('../pages/Hardware');

describe('Firefox Public Data Report', () => {
  describe('navigation links', () => {
    it('should navigate to the homepage', () => {
      Homepage.open();
      assert.equal(browser.getUrl(), Homepage.canonicalUrl);
      assert.equal(browser.getTitle(), Homepage.title);
    });

    it('should navigate to the User Activity dashboard from the homepage', () => {
      Homepage.open();
      Homepage.clickUserActivityLink();
      assert.equal(browser.getUrl(), UserActivityPage.canonicalUrl);
      assert.equal(browser.getTitle(), UserActivityPage.title);
    });

    it('should navigate to the Usage Behavior dashboard from the homepage', () => {
      Homepage.open();
      Homepage.clickUsageBehaviorLink();
      assert.equal(browser.getUrl(), UsageBehaviorPage.canonicalUrl);
      assert.equal(browser.getTitle(), UsageBehaviorPage.title);
    });

    it('should navigate to the Hardware dashboard from the homepage', () => {
      Homepage.open();
      Homepage.clickHardwareLink();
      assert.equal(browser.getUrl(), HardwarePage.canonicalUrl);
      assert.equal(browser.getTitle(), HardwarePage.title);
    });
  });

  describe('next page buttons', () => {
    it('should navigate to the next dashboard page', () => {
      // Next page button on homepage should go to "User Activity" dashboard.
      Homepage.open();
      Homepage.clickNextPageButton();
      assert.equal(browser.getUrl(), UserActivityPage.canonicalUrl);

      // Next page button on User Activity page should go to "Usage Behavior" dashboard.
      UserActivityPage.clickNextPageButton();
      assert.equal(browser.getUrl(), UsageBehaviorPage.canonicalUrl);

      // Next page button on Usage Behavior page should go to "Hardware" dashboard.
      UsageBehaviorPage.clickNextPageButton();
      assert.equal(browser.getUrl(), HardwarePage.canonicalUrl);
    });
  });

  describe('Usage Behavior dashboard', () => {
    it('should validate the regions dropdown', () => {
      UsageBehaviorPage.open();
      assert.equal(UsageBehaviorPage.categorySelector.length, 11);
    });

    it('should validate the date dropdown, "Test Metric B5"', () => {
      UsageBehaviorPage.open();
      assert.equal(
        UsageBehaviorPage.dateSelectorOptions.length,
        UsageBehaviorPage.numWeeks
      );
    });
  });
});
