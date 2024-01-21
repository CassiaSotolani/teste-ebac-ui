/// <reference types="cypress" />
import EnderecoPage from '../support/page-objets/endereco.page'
import DadosEndereco from '../fixtures/endereco.json'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it('Deve fazer cadastro de faturamento com sucesso', () => {

    EnderecoPage.editarEnderecoFaturamento('NomeTeste', 'SobrenomeTeste', 'Empresa Teste', 'Brasil', 'Rua Teste', '325', 'Dourados', 'Mato Grosso do Sul', '79811-010', '(67) 97847-7854', 'emailteste@email.com')
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });

  it('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {

    EnderecoPage.editarEnderecoFaturamento(
      DadosEndereco[1].nome,
      DadosEndereco[1].sobrenome,
      DadosEndereco[1].empresa,
      DadosEndereco[1].pais,
      DadosEndereco[1].endereco,
      DadosEndereco[1].numero,
      DadosEndereco[1].cidade,
      DadosEndereco[1].estado,
      DadosEndereco[1].cep,
      DadosEndereco[1].telefone,
      DadosEndereco[1].email,
    )
    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

  });

});