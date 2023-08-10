import classesCy from "./class/classes";
describe("Testing", () => {
  beforeEach("Visit url", () => {
    cy.visit("/web/index.php/auth/login");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("login", () => {
    cy.get(".orangehrm-login-branding > img").should("be.visible");
    cy.get(".oxd-sheet > :nth-child(1)").should(
      "have.text",
      "Username : Admin"
    );
    cy.get(".oxd-sheet > :nth-child(2)").should(
      "have.text",
      "Password : admin123"
    );
    cy.get(".oxd-sheet").should(
      "have.text",
      "Username : AdminPassword : admin123"
    );
    cy.get(".orangehrm-login-slot-wrapper").should(
      "have.text",
      "LoginUsername : AdminPassword : admin123UsernamePassword Login Forgot your password? OrangeHRM OS 5.5© 2005 - 2023 OrangeHRM, Inc. All rights reserved."
    );
  });
});
