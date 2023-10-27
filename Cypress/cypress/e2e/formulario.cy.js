describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.get('#signin2').click();
    cy.get('#sign-username').type('testing',{ force: true }).should('have.value', 'testing');
    cy.get('#sign-password').type('testing',{ force: true }).should('have.value', 'testing');
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
  })
})