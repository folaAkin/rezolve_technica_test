/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { createEngagementPage } from "../../pageObjects/create-engagement-page";
import { linkTriggerPage } from "../../pageObjects/link-trigger-page";
import { targetsPage } from "../../pageObjects/targets-page";
import { util } from "../../Utils/util";
import { urlTargetPage } from "../../pageObjects/url-target-page";
import { checkoutPage } from "../../pageObjects/checkout-page";
import { dashboardPage } from "../../pageObjects/dashboard-page";

const data = require("../../fixtures/dataFile.json");

Given(/^I am on the engagement page$/, function () {
  cy.login(data.email, data.password);
});
Given(/^I select a trigger$/, function () {
  createEngagementPage.selectTrigger("Link");
});
Given(/^user is on link trigger page$/, function () {
  cy.url().should("include", "/link-trigger");
});
When(/^I choose a Target Page$/, function () {
  linkTriggerPage.chooseTargetPage();
});
When(/^I create a new Target Page$/, function () {
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
When(/^I confirm and publish trigger$/, function () {
  urlTargetPage.conFirmAndPublishTargetUrl();
});
When(/^I verify that user is on checkout page$/, function () {
  cy.url().should("include", "/checkout");
});
When(/^I enter engagement name and create engagement$/, function () {
  checkoutPage.enterEngagementName(
    data.engagementName + util.generateRandomString(4)
  );
  checkoutPage.clickOnCreateEngagementButton();
});
Then(/^user is on my Dashboard and engagement is created$/, function () {
  cy.url().should("include", "/dashboard");
  dashboardPage.getDashboardHeaderTitle().contains("My Dashboard");
});
