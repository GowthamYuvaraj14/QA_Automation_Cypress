class HomePage {
  elements = {
    welcomeMsg: () => cy.contains("Welcome"),
    signOutLink: () => cy.get('a[href*="logout"]'),
  };

  signOut() {
    this.elements.signOutLink().click();
  }
}

module.exports = new HomePage();