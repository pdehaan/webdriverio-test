const {assert} = require('chai');

const HOMEPAGE = process.env.SITE_URL || 'https://moz-ensemble.herokuapp.com';
const DASHBOARD_USER_ACTIVITY = '/dashboard/user-activity';
const DASHBOARD_USAGE_BEHAVIOR = '/dashboard/usage-behavior';
const DASHBOARD_HARDWARE = '/dashboard/hardware';

describe("Firefox Public Data Report", () => {
  it("should navigate to the homepage", () => {
    const page = browser.url(HOMEPAGE);
    assert.equal(page.getUrl(), `${HOMEPAGE}/`);
    assert.equal(page.getTitle(), 'Firefox Public Data Report');
  });

  it("should navigate to the User Activity dashboard from the homepage", () => {
    const page = browser.url(HOMEPAGE)
      .click(`[href='${DASHBOARD_USER_ACTIVITY}']`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_USER_ACTIVITY}`);
    assert.equal(page.getTitle(), 'Firefox Public Data Report');
  });

  it("should navigate to the Usage Behavior dashboard from the homepage", () => {
    const page = browser.url(HOMEPAGE)
      .click(`[href='${DASHBOARD_USAGE_BEHAVIOR}']`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_USAGE_BEHAVIOR}`);
    assert.equal(page.getTitle(), 'Firefox Public Data Report');
  });

  it("should navigate to the Hardware dashboard from the homepage", () => {
    const page = browser.url(HOMEPAGE)
      .click(`[href='${DASHBOARD_HARDWARE}']`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_HARDWARE}`);
    assert.equal(page.getTitle(), 'Firefox Public Data Report');
  });

  it("should navigate to the next page (user-activity) from homepage", () => {
    const page = browser.url(HOMEPAGE)
      .click(`.next-button a`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_USER_ACTIVITY}`);
  });

  it("should navigate to the next page (usage-behavior) from user-activity dashboard", () => {
    const page = browser.url(`${HOMEPAGE}${DASHBOARD_USER_ACTIVITY}`)
      .click(`.next-button a`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_USAGE_BEHAVIOR}`);
  });

  it("should navigate to the next page (hardware) from usage-behavior dashboard", () => {
    const page = browser.url(`${HOMEPAGE}${DASHBOARD_USAGE_BEHAVIOR}`)
      .click(`.next-button a`);
    assert.equal(page.getUrl(), `${HOMEPAGE}${DASHBOARD_HARDWARE}`);
  });

  it("should validate the regions dropdown in Usage Behavior dashboard", () => {
    const page = browser.url(`${HOMEPAGE}${DASHBOARD_USAGE_BEHAVIOR}`);
    const options = page.elements('select#category-selector option').value;
    assert.equal(options.length, 11);
  });

  it("should validate the date dropdown in Usage Behavior dashboard 'Test Metric B5'", () => {
    const page = browser.url(`${HOMEPAGE}${DASHBOARD_USAGE_BEHAVIOR}`);
    const options = page.elements('select#date-selector option').value;
    const firstDate = new Date(page.elements('select#date-selector option:first-child').getText());
    const lastDate = new Date(page.elements('select#date-selector option:last-child').getText());
    const numWeeks = Math.ceil((firstDate - lastDate) / 1000 / 60 / 60 / 24 / 7) + 1;
    assert.equal(options.length, numWeeks);
  });
});
