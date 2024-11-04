// Importar o express
const express = require('express');
// Importar uuid - Identificador Único Universal para gerar ids únicos  
const { v4: uuidv4 } = require('uuid');

//  Criar uma instância do express 
const app = express();

//  Definir o tipo de conteúdo que será retornado pela aplicação
app.use(express.json());