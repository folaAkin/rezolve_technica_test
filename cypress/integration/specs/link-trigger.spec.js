/// <reference types ="cypress" />
import { createEngagementPage } from "../../pageObjects/create-engagement-page";
import { linkTriggerPage } from "../../pageObjects/link-trigger-page";
import { targetsPage } from "../../pageObjects/targets-page";
import { util } from "../../Utils/util";
import { urlTargetPage } from "../../pageObjects/url-target-page";
import { checkoutPage } from "../../pageObjects/checkout-page";
import { dashboardPage } from "../../pageObjects/dashboard-page";

const data = require("../../fixtures/dataFile.json");

describe("Create a Link Trigger", () => {
  before(() => {
    cy.login(data.email, data.password);
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("Select Link Trigger ", () => {
    createEngagementPage.selectTrigger("Link");
  });

  it("Verify that user is on link trigger page", () => {
    cy.url().should("include", "/link-trigger");
  });

  it("Choose a Target Page", () => {
    linkTriggerPage.chooseTargetPage();
  });

  it("Create a new Target Page", () => {
    cy.url().should("include", "/targets");
    targetsPage.getNewTargetPageText().contains("Create a new Target Page");
    targetsPage.clickOnUrl();
    urlTargetPage.enterNotificationTitle(
      data.notificationTitle + util.generateRandomString(4)
    );
    urlTargetPage.enterNotificationSubTitle(
      data.notificationSubTitle + util.generateRandomString(4)
    );
    urlTargetPage.enterTargetURL(
      data.targetUrl + util.generateRandomString(4) + ".com"
    );
  });

  it("Confirm and publish trigger", () => {
    urlTargetPage.conFirmAndPublishTargetUrl();
  });

  it("Verify that user is on checkout page", () => {
    cy.url().should("include", "/checkout");
  });

  it("Enter engagement name and create engagement", () => {
    checkoutPage.enterEngagementName(
      data.engagementName + util.generateRandomString(4)
    );
    checkoutPage.clickOnCreateEngagementButton();
  });

  it("Verify that  user is on my Dashboard and engagement is created", () => {
    cy.url().should("include", "/dashboard");
    dashboardPage.getDashboardHeaderTitle().contains("My Dashboard");
  });
});
