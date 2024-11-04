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

// ROUTAS

// Definindo uma rota para criar um novo livro
app.post("/api/cadastrar-livro", (request, response) => {

  // Receber as informações do livro no body da requisição
  const { title, description, authors, ISBN, categories, rating } = request.body;

  // Verifica se o livro já existe de acordo ao parâmetro ISBN, por ser único
  const bookAlreadyExists = books.some((book) => book.ISBN === ISBN);

  if (bookAlreadyExists) {
    return response.status(400).json({ error: "Book already exists!" });
  }

  // Armazena o livro no array
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