describe('Smoke Test with Custom Command', () => {
  it('Login using Custom command', () => {
    cy.login('qaexistinguser@test.com','Password123!');
    cy.contains('Welcome').should('be.visible');
  });
});
