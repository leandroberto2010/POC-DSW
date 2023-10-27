describe('test multiple de prueba', () => {

  it('Encontrar, clickear y tomar foto de la pagina del art Samsumg', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.get("a").contains("Samsung galaxy s6").click()
    cy.url().should('include', 'prod.html?idp_=1')
    cy.wait(1000).screenshot('tres', {capture: 'fullPage'})
  })

  it('busqueda de texto Categories', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('CATEGORIES')
  })

  it('busqueda de texto Phones', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('Phones')
  })

  it('busqueda de texto Monitoes', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('Monitors')
  })

  describe('test multiple de prueba', () => {

  it('Encontrar, clickear y tomar foto de la pagina del art Samsumg', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.get("a").contains("Samsung galaxy s6").click()
    cy.url().should('include', 'prod.html?idp_=1')
    cy.wait(1000).screenshot('tres', {capture: 'fullPage'})
  })

  it('busqueda de texto Categories', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('CATEGORIEs')
  })

  it('busqueda de texto Phones', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('Phones')
  })

  it('busqueda de texto Monitoes', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains('Monitors')
  })

})
})
