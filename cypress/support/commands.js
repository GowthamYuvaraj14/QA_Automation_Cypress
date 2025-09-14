Cypress.Commands.add('login', (email, password) => {
  cy.visit('/customer/account/login/');
  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});

Cypress.Commands.add('signup', (firstName, lastName, email, password, confirmPassword) => {
  cy.visit('/customer/account/create/');
  cy.get('#firstname').type(firstName);
  cy.get('#lastname').type(lastName);
  cy.get('#email_address').type(email);
  cy.get('#password').type(password);
  cy.get('#password-confirmation').type(confirmPassword);
  cy.get('button[title="Create an Account"]').click();
});

