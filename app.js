// Importar o express
const express = require('express');
// Importar uuid - Identificador Único Universal para gerar ids únicos  
const { v4: uuidv4 } = require('uuid');

//  Criar uma instância do express 
const app = express();

//  Definir o tipo de conteúdo que será retornado pela aplicação
app.use(express.json());

// Declarar um array vazio para armazenar os livros
const books = [];

// FUNÇÕES

// Middleware
// Função para verificar se livro já existe
function verifyIfExistsBook(request, response, next) {

  const { ISBN } = request.headers;

  const bookExists = books.find(book => book.ISBN === ISBN);

  if (!bookExists) {
    return response.status(400).json({ error: "Book not found!" });
  }

  request.bookExists = bookExists;

  return next();

}

// ROUTAS

// Definindo uma rota para criar um novo livro
app.post("/api/cadastrar-livro", (request, response) => {

  const { title, description, authors, ISBN, categories, rating } = request.body;

  const bookAlreadyExists = books.some((book) => book.ISBN === ISBN);

  if (bookAlreadyExists) {
    return response.status(400).json({ error: "Book already exists!" });
  }

  books.push({
    id: uuidv4(),
    title,
    description,
    authors,
    ISBN,
    categories,
    rating,
    createdAt: new Date()
  });

  return response.status(201).send(books);
});

// Definido rota para atualizar um livro específico
// O id é um parâmetro de rota
app.put('/api/atualizar-livro/:id', (request, response) => {

  const { id } = request.params;

  const { title, description, authors, ISBN, categories, rating } = request.body;

  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return response.status(400).json({ error: "Book not found!" });
  }

  books[bookIndex] = {
    id,
    title,
    description,
    authors,
    ISBN,
    categories,
    rating,
    updateddAt: new Date()
  };

  return response.status(200).send(books);
});

// Definindo rota para deletar/excluir um livro específico
// O id é um parâmetro de rota
app.delete('/api/excluir-livro/:id', (request, response) => {

  const { id } = request.params;

  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return response.status(400).json({ error: "Book not found!" });
  }

  books.splice(bookIndex, 1);

  return response.status(200).send({ message: "Book deleted seccessfully" });
});

// Definindo uma rota para o endpoint /livros, busca todos os livros cadastrados
app.get('/api/livros', (request, response) => {

  // const { books } = request;

  return response.status(200).json(books);
});

// Definindo uma rota para buscar livro pelo ID ou ISBN
app.get('/api/livros/:id', (request, response) => {

  const { id } = request.params;

  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return response.status(400).json({ error: "Book not found!" });
  }

  return response.status(200).json(books[bookIndex]);
});

// Iniciar o servidor para ouvir na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000...');
});