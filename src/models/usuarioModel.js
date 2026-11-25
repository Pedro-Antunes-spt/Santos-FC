let database = require("../database/config");

function autenticar(email, senha) {

    console.log("ACESSEI O USUARIO MODEL - AUTENTICAR");

    let instrucaoSql = `
        SELECT idUsuario, nome, email
        FROM usuario
        WHERE email = ? AND senha = ?;
    `;

    return database.executar(instrucaoSql, [email, senha]);
}

function cadastrar(nome, email, senha) {

    console.log("ACESSEI O USUARIO MODEL - CADASTRAR");

    let instrucaoSql = `
        INSERT INTO usuario (nome, email, senha)
        VALUES (?, ?, ?);
    `;

    return database.executar(instrucaoSql, [nome, email, senha]);
}

module.exports = {
    autenticar,
    cadastrar
};