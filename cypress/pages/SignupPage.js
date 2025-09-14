class SignupPage {
  elements = {
    firstName: () => cy.get('#firstname'),
    lastName: () => cy.get('#lastname'),
    email: () => cy.get('#email_address'),
    password: () => cy.get('#password'),
    confirmPassword: () => cy.get('#password-confirmation'),
    createAccountBtn: () => cy.get('button[title="Create an Account"]'),
    errorMessage: () => cy.get('.message-error'),
    successMessage: () => cy.contains("Thank you for registering"),
  };

  visit() {
    cy.visit('/customer/account/create/');
  }

  fillForm(firstName, lastName, email, password, confirmPassword) {
    this.elements.firstName().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.email().type(email);
    this.elements.password().type(password);
    this.elements.confirmPassword().type(confirmPassword);
  }

  submit() {
    this.elements.createAccountBtn().click();
  }
}

module.exports = new SignupPage();
