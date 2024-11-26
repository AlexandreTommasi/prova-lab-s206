# Projeto de Testes de API com Postman e Newman

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
