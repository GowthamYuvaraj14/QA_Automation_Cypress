class AccountPage {
  elements = {
    changePasswordLink: () => cy.contains("Change Password"),
    currentPassword: () => cy.get('#current-password'),
    newPassword: () => cy.get('#password'),
    confirmPassword: () => cy.get('#password-confirmation'),
    saveBtn: () => cy.get('button[title="Save"]'),
    successMessage: () => cy.get('.message-success'),
  };

  visit() {
    cy.visit('/customer/account/edit/changepass/');
  }

  changePassword(oldPass, newPass) {
    this.elements.currentPassword().type(oldPass);
    this.elements.newPassword().type(newPass);
    this.elements.confirmPassword().type(newPass);
    this.elements.saveBtn().click();
  }
}

module.exports = new AccountPage();

