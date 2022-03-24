class UrlTargetPage {
  notificationTitle = "#title";
  notificationSubTitle = "#subtitle";
  targetUrl = "[name='url']";
  confirmAndPublishButton = ".label.ng-star-inserted";

  enterNotificationTitle(notificationTitle) {
    cy.get(this.notificationTitle).clear().type(notificationTitle);
  }

  enterNotificationSubTitle(notificationSubTitle) {
    cy.get(this.notificationSubTitle).clear().type(notificationSubTitle);
  }

  enterTargetURL(targetUrl) {
    cy.get(this.targetUrl).should("be.visible").clear().type(targetUrl);
  }

  conFirmAndPublishTargetUrl() {
    cy.get(this.confirmAndPublishButton).should("be.visible").click();
  }
}

export const urlTargetPage = new UrlTargetPage();
