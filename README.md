<!-- Title -->
<h1> Gerenciador de Livros - API 🔥 </h1>

Desafio de Seleção para Desenvolvedor Backend

### Bem-vindo(a) ao processo seletivo da Talentinhos Top Master!

<h3>Integrante(s): Wilson Ganga Dos Santos</h3>

<p>
    Nós valorizamos um backend sólido, e queremos conhecer sua habilidade e compreensão dos
    conceitos fundamentais dessa área. Por isso, formulamos algumas questões e um desafio prático
    para você. Boa sorte!
</p>

</hr>

## 🚀 Parte 1: Perguntas Conceituais

1. Qual é o foco do backend?
2. Quais são as principais tecnologias utilizadas nesse lado do desenvolvimento web?
3. O que são frameworks?
4. O que liga o back end com o front end?
5. Quais são os métodos HTTP e o que fazem?
6. O que é o Postman?
7. O que é o Express?
8. Porque você se interessou para essa vaga (de desenvolvedor Back end)?

## 🚀 Parte 2: Desafio Prático

### 1. Criação de uma API

Implemente uma API básica com express para gerenciar livros. Use os métodos GET, POST, PUT e
DELETE. Comente com suas palavras.

### 2. Instruções para a API:

o A API deve estar configurada para rodar na porta 5000

## ✨ Funcionalidades / Requisitos

- [x] Deve ser possível criar um livro
- [x] Deve ser possível buscar todos os livros
- [x] Deve ser possível atualizar as informações de um livro específico
- [x] Deve ser possível excluir um livro específico
- [x] Deve ser possível buscar um livro específico

## Regras de Negócio

- [x] Não deve ser possível cadastrar um livro que já existe
- [x] Não deve ser possível buscar as informações de um livro não existente
- [x] Não deve ser possível atualizar um livro não existente
- [x] Não deve ser possível excluir um livro não existente

## 🖼️ Testes das rotas no insomnia

### Cadastrar livros

<!-- Logotipo -->
<div align="center">
  <img src="./assets/Cadastrar Livro.png">
</div>

### Buscar todos os livros armazenados

<div align="center">
  <img src="./assets//Buscar todos livros.png">
</div>

### Atualizar livro específico

<div align="center">
    <img src="./assets/Atualizar Livro.png">
</div>

### Excluir livro específico

<div align="center">
    <img src="./assets/Excluir Livro.png">
</div>

### Buscar livro específico pelo ID ou ISBN

<div align="center">
    <img src="./assets/Buscar pelo ID.png">
</div>

### Livro não encontrado ao tentar atualizar

<div align="center">
    <img src="./assets/Not found.png">
</div>

### Livro não encontrato ao tentar buscar pelo ID

<div align="center">
    <img src="./assets/Not found 2.png">
</div>

## 🧰 Tecnologias e Bibliotecas

* [Nodejs](https://nodejs.org/en/download/package-manager)
* [uuid](https://www.npmjs.com/package/uuid)
* [nodemon](https://www.npmjs.com/package/nodemon)

### Tools para criar API
 * [NodeJS](https://nodejs.org/en/)

## ⚙️ Rodando o Projeto
```bash
# Clone este repositório para a pasta anterior
$ git clone https://github.com/WGS-94/senac-backend-desafio-1.git
# ou use a opção de download.
# Acesse a senac-backend-desafio-1
# Terminal
$ cd senac-backend-desafio-1
# Instale as dependências
$ npm install
ou
$ yarn install
# Executando o Projeto
$ npm dev 
ou
$ yarn dev