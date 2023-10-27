describe('error de sintaxis por el encadenamiento', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    //cy.visit('https://example.cypress.io')
    //cy.screenshot('imgaen1')
    cy.get("a").contains("Samsung galaxy s6").debug(); //ERROR DE SINTAXIS
    
  })
})