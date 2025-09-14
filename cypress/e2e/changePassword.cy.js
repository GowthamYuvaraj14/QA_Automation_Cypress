const LoginPage = require('../pages/LoginPage');
const AccountPage = require('../pages/AccountPage');

describe('Change Password Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('qaexistinguser@test.com', 'Password123!');
  });

  it('Change Password Successfully', () => {
    AccountPage.visit();
    AccountPage.changePassword('Password123!', 'NewPass123!');
    AccountPage.elements.successMessage().should('be.visible');
  });

  it('Incorrect Old Password', () => {
    AccountPage.visit();
    AccountPage.changePassword('WrongPass', 'NewPass123!');
    cy.contains('The password doesn\'t match').should('be.visible');
  });
});
