class LoginPage {
  elements = {
    email: () => cy.get('#email'),
    password: () => cy.get('#pass'),
    loginBtn: () => cy.get('#send2'),
    errorMessage: () => cy.get('.message-error'),
  };

  visit() {
    cy.visit('/customer/account/login/');
  }

  login(email, password) {
    this.elements.email().type(email);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();