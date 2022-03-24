class LinkTriggerPage {
  chooseTargetPageButton = "[data-test='next-button']";

  chooseTargetPage() {
    cy.get(this.chooseTargetPageButton).should("be.visible").click();
  }
}

export const linkTriggerPage = new LinkTriggerPage();
