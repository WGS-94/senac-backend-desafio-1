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

<h4>1. Qual é o foco do backend?</h4>
<p>
    O foco do backend é a parte interna de uma aplicação, ou seja, tudo o que faz com que a aplicação funcione, mas não é visível para o usuário. O backend é responsável por: Lidar com a lógica de negócios, manipulação de dados e integração com bancos de dados, assim como gerenciar a funcionalidade do aplicativo, programar sistemas que armazenam dados, processar informações, autenticar usuários, garantir que as interações no frontend resultem em ações reais.
</p>

<h4>2. Quais são as principais tecnologias utilizadas nesse lado do desenvolvimento web</h4>
<p>
    No desenvolvimento backend, várias tecnologias e ferramentas são comumente utilizadas. Aqui estão algumas das principais:
    - Linguagens de programação como Java, Python, JavaScript, C#, PHP, Ruby, entre outras.
</p>

<h4>3. O que são frameworks?</h4>
<p>
    Um framework é uma estrutura de desenvolvimento de software que fornece uma base para construção  de aplicações. Ele fornece uma estrutura de código, bibliotecas e ferramentas  para facilitar o desenvolvimento de aplicações. Frameworks são projetados para ajudar a   desenvolvedores a criar aplicações mais rápidas e eficientes.
    Aqui estão alguns frameworks:
    - Express.js (Node.js)
    - Django e Flask (Python)
    - Spring Boot (Java)
    - Ruby on Rails (Ruby)
    - Laravel (PHP)
</p>

<h4>4. O que liga o back end com o front end?</h4>
<p>
    O que liga o back-end com o front-end é a API (Application Programming Interface).
    A API é uma interface de programação de aplicativos que permite que diferentes sistemas se comuniquem entre si. Ela fornece uma forma de interagir com os dados e funcional idades do back-end, permitindo  que o front-end acesse e manipule esses dados.
</p>

<h4>5. Quais são os métodos HTTP e o que fazem?</h4>
<p>
    Os métodos HTTP são usados para realizar ações em uma API. Aqui estão alguns dos métodos HTTP mais comuns: GET, POST, PUT, DELETE, PATCH. GET: é usado para recuperar dados de uma API. POST: é usado para criar novos recursos em uma API. PUT: é usado para atualizar recursos existentes em uma API. DELETE: é usado para excluir recursos de uma API. PATCH: é usado para atualizar parcialmente recursos existentes em uma API.  
</p>

<h4>6. O que é o Postman?</h4>
<p>
    O Postman é uma ferramenta de desenvolvimento de API que permite que os desenvolvedores  testem e desenvolvam APIs de forma eficiente. Com o Postman, os desenvolvedores podem enviar  solicitações HTTP para uma API, visualizar as respostas e manipular os dados de forma fácil e  intuitiva.
</p>

<h4>7. O que é o Express?</h4>
<p>
    O Express é um framework de desenvolvimento de API para Node.js. Ele fornece uma  estrutura de código, bibliotecas e ferramentas para facilitar o desenvolvimento de aplicações  web. Com o Express, os desenvolvedores podem criar aplicações web rápidas e eficientes, utilizando uma sintaxe simples e fácil de entender.
</p>

<h4>8. Porque você se interessou para essa vaga (de desenvolvedor Back end)?</h4>
<p>
    Eu me interessei para essa vaga de desenvolvedor Back-end porque eu acredito que é uma área de grande evolução e que tem um grande impacto na sociedade. Além disso, eu acredito que é uma área que exige habilidades técnicas e de resolução de problemas, o que me motiva a aprender e a crescer como profissional.
</p>

## 🚀 Parte 2: Desafio Prático

### 1. Criação de uma API

Implemente uma API básica com express para gerenciar livros. Use os métodos GET, POST, PUT e DELETE. Comente com suas palavras.

### 2. Instruções para a API:

A API deve estar configurada para rodar na porta 5000

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
# http://localhost:5000