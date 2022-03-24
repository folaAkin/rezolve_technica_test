class DashboardPage {
  myDashboardHeaderTitle = "[data-test='header-title']";

  getDashboardHeaderTitle() {
    return cy.get(this.myDashboardHeaderTitle);
  }
}
export const dashboardPage = new DashboardPage();
