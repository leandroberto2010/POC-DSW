describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
    cy.contains("Samsung galaxy s6").click();
    cy.get("a[href*='prod.html?idp_=1']").eq(1).click();

  })
})