describe('Testes no site The Internet', () => {

  // Criando uma função para facilitar o login (não preciso repetir nos testes)
  const performLogin = (username, password) => {
    cy.get('#username').type(username); // Preenche o nome de usuário
    cy.get('#password').type(password); // Preenche a senha
    cy.get('button[type="submit"]').click(); // Clica no botão de login
  };

  it('Deve carregar o formulário de login e realizar login com sucesso (positivo)', () => {
    cy.visit('https://the-internet.herokuapp.com/login'); // Abre a página de login

    // Fazendo login com credenciais válidas
    performLogin('tomsmith', 'SuperSecretPassword!');

    // Verificando se o login deu certo (mensagem de sucesso)
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Deve verificar o funcionamento do botão Add/Remove Elements (positivo)', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/'); // Página do botão Add/Remove Elements

    // Adicionando um elemento
    cy.get('button').contains('Add Element').click();

    // Conferindo se o botão foi adicionado
    cy.get('.added-manually').should('exist');

    // Removendo o botão
    cy.get('.added-manually').click();

    // Conferindo se o botão foi removido
    cy.get('.added-manually').should('not.exist');
  });

  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas (negativo)', () => {
    cy.visit('https://the-internet.herokuapp.com/login'); // Abre a página de login

    // Fazendo login com credenciais erradas
    performLogin('invalid_user', 'invalid_password');

    // Verificando se aparece a mensagem de erro
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

});
