
describe('error de sincronismo', () => {  

it('debe salir error por la posible ejecucion del .log(text) antes del .should()  ', () => {
  cy.visit('https://www.demoblaze.com/index.html#carouselExampleIndicators')
  cy.get(".navbar-brand").invoke("text").then((text) => {
     cy.log(text)
      return text;
      })
  .should("equal", "WSO2 Identity Server");
})
})