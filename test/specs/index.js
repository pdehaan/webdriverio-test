const {assert} = require('chai');

const Homepage = require('../pages/Homepage');
const UserActivityPage = require('../pages/UserActivity');
const UsageBehaviorPage = require('../pages/UsageBehavior');
const HardwarePage = require('../pages/Hardware');

describe("Firefox Public Data Report", () => {
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

  it("should navigate to the next page (user-activity) from homepage", () => {
    const page = Homepage.open()
      .click(Homepage.nextPageButton);
    assert.equal(page.getUrl(), UserActivityPage.canonicalUrl);
  });

  it("should navigate to the next page (usage-behavior) from user-activity dashboard", () => {
    const page = UserActivityPage.open()
      .click(UserActivityPage.nextPageButton);
    assert.equal(page.getUrl(), UsageBehaviorPage.canonicalUrl);
  });

  it("should navigate to the next page (hardware) from usage-behavior dashboard", () => {
    const page = UsageBehaviorPage.open()
      .click(UsageBehaviorPage.nextPageButton);
    assert.equal(page.getUrl(), HardwarePage.canonicalUrl);
  });

  it("should validate the regions dropdown in Usage Behavior dashboard", () => {
    const page = UsageBehaviorPage.open();
    assert.equal(UsageBehaviorPage.categorySelector.length, 11);
  });

  it("should validate the date dropdown in Usage Behavior dashboard 'Test Metric B5'", () => {
    const page = UsageBehaviorPage.open();
    assert.equal(UsageBehaviorPage.dateSelectorOptions.length, UsageBehaviorPage.numWeeks);
  });
});
