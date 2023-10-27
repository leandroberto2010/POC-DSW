describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click();
    cy.get('#query-btn').click();
    cy.get('.btn > span').click();
    cy.get('#inputName').clear('a');
    cy.get('#inputName').type('asdwadw');
    cy.get('#inputEmail').clear('aw');
    cy.get('#inputEmail').type('awdwa');
    cy.get('#inputPassword').clear('aw');
    cy.get('#inputPassword').type('awdawd');
    /* ==== End Cypress Studio ==== */
  })
})