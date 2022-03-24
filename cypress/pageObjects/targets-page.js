class TargetsPage {
  newTargetPageText = ".header > .text";
  url = "[class='text text-wrap']";

  getNewTargetPageText() {
    return cy.get(this.newTargetPageText);
  }

  clickOnUrl() {
    cy.get(this.url).contains("Url").click({ force: true });
  }
}

export const targetsPage = new TargetsPage();
