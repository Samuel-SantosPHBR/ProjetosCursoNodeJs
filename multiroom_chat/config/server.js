// importação do express, consing e body parser
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//iniciar objeto do express

const app = express();

//configura ejs setando as variaveis 'view engine' e a 'views' do express
app.set('view engine','ejs');
app.set('views','./app/views');

//configurando o middleware express.static
app.use(express.static('./app/public'));

//configurando o middleware body parser
app.use(bodyParser.urlencoded({extended: true}));

//configurando o middleware express validator
app.use(expressValidator());

//efetua o auto load das rotas dos models e dos controlles para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//exportando o app que o app.js espera
module.exports = app;
