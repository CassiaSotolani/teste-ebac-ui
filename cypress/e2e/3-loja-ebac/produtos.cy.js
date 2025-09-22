///<reference types='cypress'/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('.woocommerce-product-rating').should('exist')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    })

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block').last().click()
        cy.get('.woocommerce-product-rating').should('exist')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    })

    it('Deve selecionar um produto específico da lista - passando a posição', () => {
        cy.get('.product-block').eq(4).click()
        cy.get('.woocommerce-product-rating').should('exist')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    })

    it('Deve selecionar um produto específico da lista - passando o nome', () => {
        cy.get('.product-block').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.woocommerce-product-rating').should('exist')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    })

})