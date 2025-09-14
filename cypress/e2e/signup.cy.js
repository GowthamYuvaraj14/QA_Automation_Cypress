const SignupPage = require('../pages/SignupPage');

describe('Signup Tests', () => {
  it('Valid Signup', () => {
    SignupPage.visit();
    const randomEmail = `user_${Date.now()}@test.com`;
    SignupPage.fillForm('John', 'Doe', randomEmail, 'Password123!', 'Password123!');
    SignupPage.submit();
    SignupPage.elements.successMessage().should('be.visible');
  });

  it('Duplicate Email', () => {
    SignupPage.visit();
    SignupPage.fillForm('John', 'Doe', 'qaexistinguser@test.com', 'Password123!', 'Password123!');
    SignupPage.submit();
    SignupPage.elements.errorMessage().should('be.visible');
  });

  it('Password Mismatch', () => {
    SignupPage.visit();
    SignupPage.fillForm('Jane', 'Smith', `user_${Date.now()}@test.com`, 'Password123!', 'Password999!');
    SignupPage.submit();
    cy.contains('Please enter the same value again.').should('be.visible');
  });
});
