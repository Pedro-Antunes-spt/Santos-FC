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

    let instrucaoSql = `
        SELECT
            idJogador,
            nome,
            nomePosicao,
            idade,
            numeroCamisa,
            notaGeral,
            idFavorito
        FROM jogador_cadastrado
        JOIN posicao
            ON fkPosicao = idPosicao
        LEFT JOIN jogador_favorito
            ON fkJogador = idJogador
            AND jogador_favorito.fkUsuario =
                jogador_cadastrado.fkUsuario
        WHERE jogador_cadastrado.fkUsuario = ?
        ORDER BY idJogador DESC;
    `;

    return database.executar(instrucaoSql, [fkUsuario]);
}

function favoritar(fkUsuario, fkJogador) {

    let instrucaoSql = `
        INSERT INTO jogador_favorito (fkUsuario, fkJogador)
        SELECT fkUsuario, idJogador
        FROM jogador_cadastrado
        WHERE fkUsuario = ? AND idJogador = ?;
    `;

    return database.executar(instrucaoSql, [
        fkUsuario,
        fkJogador
    ]);
}

function desfavoritar(fkUsuario, fkJogador) {

    let instrucaoSql = `
        DELETE FROM jogador_favorito
        WHERE fkUsuario = ? AND fkJogador = ?;
    `;

    return database.executar(instrucaoSql, [
        fkUsuario,
        fkJogador
    ]);
}

module.exports = {
    cadastrar,
    listar,
    favoritar,
    desfavoritar
};