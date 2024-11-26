# Projeto de Testes de API com Postman e Newman (Prova Postman)

Este repositório contém testes de API desenvolvidos com **Postman** e executados pelo **Newman**, atendendo aos requisitos do exercício. A API utilizada nos testes é a pública [JSONPlaceholder](https://jsonplaceholder.typicode.com). O projeto inclui a Collection de testes e o relatório gerado pelo Newman.

---

## Estrutura do Projeto

- `TesteAPI_JSONPlaceholder.postman_collection.json`: Arquivo contendo a Collection do Postman.
- `newman/report.html`: Relatório em formato HTML gerado após a execução dos testes.

---

## Como Executar o Projeto

### Pré-requisitos
Antes de executar os testes, você precisará ter os seguintes programas instalados:
1. **Node.js** (inclui o gerenciador de pacotes `npm`)  
   [Baixe aqui](https://nodejs.org/).

2. **Newman** (ferramenta para execução de Collections do Postman):  
   Instale usando o comando:
   ```bash
   npm install -g newman

3. **Reporter HTML do Newman**:
   Necessário para gerar o relatório em HTML.
   Instale utilizando o comando:
   ```bash
   npm install -g newman-reporter-html

### Passos para Executar os Testes

1. **Clone este repositório:** 
   ```bash
   git clone https://github.com/AlexandreTommasi/prova-lab-s206/ProvaPostman.git
   cd ProvaPostman


2. **Execute a Collection utilizando o Newman:**
   Você pode usar também o htmlextra para gerar um relatório visualmente mais agradável  
   ```bash
   newman run TesteAPI_JSONPlaceholder.postman_collection.json -r html --reporter-html-export newman/report.html
   newman run "TesteAPI_JSONPlaceholder.postman_collection.json" -r htmlextra

4. **Abra o relatório gerado:**
   Navegue até a pasta newman/ e abra o arquivo .html no navegador para visualizar os resultados.
