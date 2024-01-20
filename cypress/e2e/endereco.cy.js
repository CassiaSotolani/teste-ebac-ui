/// <reference types="cypress" />
import EnderecoPage from '../support/page-objets/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it.only('Deve fazer cadastro de faturamento com sucesso', () => {

    EnderecoPage.editarEnderecoFaturamento('NomeTeste', 'SobrenomeTeste', 'Empresa Teste', 'Brasil', 'Rua Teste', '325', 'Dourados', 'Mato Grosso do Sul', '79811-010', '(67) 97847-7854', 'emailteste@email.com')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });
});