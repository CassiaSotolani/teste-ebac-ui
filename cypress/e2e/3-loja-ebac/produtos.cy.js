///<reference types='cypress'/>

import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
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
        produtosPage.buscarProdutoLista('Argus All-Weather Tank')
        cy.get('.woocommerce-product-rating').should('exist')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    })

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página de um produto específico', () => {
        produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
    })

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('S', 'Brown', 5)

        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    })

    it.only('Deve adicionar produto ao carrinho -  buscando da massa de dados', () => {

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
    
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })
    })

})