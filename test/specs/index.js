const {assert} = require('chai');

const Homepage = require('../pages/Homepage');
const UserActivityPage = require('../pages/UserActivity');
const UsageBehaviorPage = require('../pages/UsageBehavior');
const HardwarePage = require('../pages/Hardware');

describe("Firefox Public Data Report", () => {
  describe("navigation links", () => {
    it("should navigate to the homepage", () => {
      const page = Homepage.open();
      assert.equal(page.getUrl(), Homepage.canonicalUrl);
      assert.equal(page.getTitle(), Homepage.title);
    });

    it("should navigate to the User Activity dashboard from the homepage", () => {
      const page = Homepage.open()
        .click(UserActivityPage.pageLinkUrl);
      assert.equal(page.getUrl(), UserActivityPage.canonicalUrl);
      assert.equal(page.getTitle(), UserActivityPage.title);
    });

    it("should navigate to the Usage Behavior dashboard from the homepage", () => {
      const page = Homepage.open()
        .click(UsageBehaviorPage.pageLinkUrl);
      assert.equal(page.getUrl(), UsageBehaviorPage.canonicalUrl);
      assert.equal(page.getTitle(), UsageBehaviorPage.title);
    });

    it("should navigate to the Hardware dashboard from the homepage", () => {
      const page = Homepage.open()
        .click(HardwarePage.pageLinkUrl);
      assert.equal(page.getUrl(), HardwarePage.canonicalUrl);
      assert.equal(page.getTitle(), HardwarePage.title);
    });
  });

  describe("next page buttons", () => {
    it("should navigate to the next dashboard page", () => {
      // Next page button on homepage should go to "User Activity" dashboard.
      const userActivityPage = Homepage.open().click(Homepage.nextPageButton);
      assert.equal(userActivityPage.getUrl(), UserActivityPage.canonicalUrl);

      // Next page button on User Activity page should go to "Usage Behavior" dashboard.
      const usageBehaviorPage = userActivityPage.click(UserActivityPage.nextPageButton);
      assert.equal(usageBehaviorPage.getUrl(), UsageBehaviorPage.canonicalUrl);

      // Next page button on Usage Behavior page should go to "Hardware" dashboard.
      const hardwarePage = usageBehaviorPage.click(UsageBehaviorPage.nextPageButton);
      assert.equal(hardwarePage.getUrl(), HardwarePage.canonicalUrl);
    });
  });

  describe("Usage Behavior dashboard", () => {
    it("should validate the regions dropdown", () => {
      const page = UsageBehaviorPage.open();
      assert.equal(UsageBehaviorPage.categorySelector.length, 11);
    });

    it("should validate the date dropdown, 'Test Metric B5'", () => {
      const page = UsageBehaviorPage.open();
      assert.equal(UsageBehaviorPage.dateSelectorOptions.length, UsageBehaviorPage.numWeeks);
    });
  });
});
