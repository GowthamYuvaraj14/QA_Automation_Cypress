const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () => {
  it('Valid Login', () => {
    LoginPage.visit();
    LoginPage.login('qaexistinguser@test.com', 'Password123!');
    cy.contains('Welcome').should('be.visible');
  });

  it('Invalid Password', () => {
    LoginPage.visit();
    LoginPage.login('qaexistinguser@test.com', 'WrongPassword');
    LoginPage.elements.errorMessage().should('be.visible');
  });

  it('Empty Fields', () => {
    LoginPage.visit();
    LoginPage.login('', '');
    LoginPage.elements.errorMessage().should('be.visible');
  });
});