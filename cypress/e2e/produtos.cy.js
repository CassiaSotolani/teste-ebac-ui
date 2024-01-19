/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

  before(() => {
    cy.visit('produtos/')
  })

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      // .first()
      // .last()
      // .eq(4)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  })

  it('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 6

    cy.get('[class="product-block grid"]').contains('Argus All-Weather Tank').click()
    cy.get('.button-variable-item-M').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')

  })

  it('Deve adicionar produtos ao carrinho - Usando Comando customizados', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Brown', 2)
  })

  it('Deve adicionar produtos ao carrinho - Usando Comando customizados', () => {
    cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'S', 'Purple', 2)
  })

})