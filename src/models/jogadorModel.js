let database = require("../database/config");

function cadastrar(fkUsuario, fkPosicao, nome, numeroCamisa, idade, notaGeral) {

    console.log("ACESSEI O JOGADOR MODEL - CADASTRAR");

    let instrucaoSql = `
        INSERT INTO jogador_cadastrado
        (fkUsuario, fkPosicao, nome, numeroCamisa, idade, notaGeral)
        VALUES (?, ?, ?, ?, ?, ?);
    `;

    return database.executar(instrucaoSql, [
        fkUsuario,
        fkPosicao,
        nome,
        numeroCamisa,
        idade,
        notaGeral
    ]);
}

function listar(fkUsuario) {

    console.log("ACESSEI O JOGADOR MODEL - LISTAR");

    let instrucaoSql = `
        SELECT
            idJogador,
            nome,
            nomePosicao,
            idade,
            numeroCamisa,
            notaGeral
        FROM jogador_cadastrado
        JOIN posicao
            ON fkPosicao = idPosicao
        WHERE fkUsuario = ?
        ORDER BY idJogador DESC;
    `;

    return database.executar(instrucaoSql, [fkUsuario]);
}

module.exports = {
    cadastrar,
    listar
};