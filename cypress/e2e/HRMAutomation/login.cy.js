import classesCy from "./class/classes";
describe("Testing", () => {
  beforeEach("Visit url", () => {
    cy.visit("/web/index.php/auth/login");
    cy.intercept({resourceType:/xhr|fetch/}, {log: false});
    
  });

  it("login", () => {
    classesCy.LoginPage()
   
  });
});
