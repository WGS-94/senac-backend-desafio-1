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

// Iniciar o servidor para ouvir na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000...');
});