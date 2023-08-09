
class LoginPage {
    LoginPage() {
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input")
        .clear()
        .type("Admin");
    
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input")
        .clear()
        .type("admn123",{log: false});
    
      cy.get(".oxd-button").click();
    }
  
  }
  
  export default new LoginPage();
  