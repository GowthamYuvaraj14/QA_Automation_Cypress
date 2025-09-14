const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

describe('Signout Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('qaexistinguser@test.com', 'Password123!');
  });

  it('Valid Signout', () => {
    HomePage.signOut();
    cy.contains('You are signed out').should('be.visible');
  });

  it('Access After Signout', () => {
    HomePage.signOut();
    cy.visit('/customer/account/');
    cy.url().should('include', 'login');
  });
});
