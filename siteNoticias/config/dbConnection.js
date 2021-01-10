var mysql = require('mysql');

//variavel que contem a função do banco de dados ou seja não é iniciada no auto load
var connBd = function () {
    console.log("conexao establecida");
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias' 
    });
}

//exporta banco
module.exports = function () {
    return connBd;
}