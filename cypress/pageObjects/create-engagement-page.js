class CreateEngagementPage {
  signInLink = "[data-test=sign-in]";
  createEngagementText = "[data-test='header-title']";
  triggers = "h2[_ngcontent-ng-cli-universal-c193]";

  clickOnSignInLink() {
    cy.get(this.signInLink).click({ force: true });
  }

  getCreateEngagementText() {
    return cy.get(this.createEngagementText);
  }

  selectTrigger(trigger) {
    cy.get(this.triggers).contains(trigger, { matchCase: false }).click();
  }
}

export const createEngagementPage = new CreateEngagementPage();
