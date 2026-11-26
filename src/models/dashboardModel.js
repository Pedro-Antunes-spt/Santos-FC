let database = require("../database/config");

function buscarKpis() {

    let instrucaoSql = `
        SELECT
            (SELECT COUNT(*) FROM usuario) AS totalUsuarios,
            (SELECT COUNT(*) FROM jogador_cadastrado) AS totalJogadores,
            (SELECT COUNT(*) FROM jogador_favorito) AS totalFavoritos;
    `;

    return database.executar(instrucaoSql);
}

function buscarPosicoes() {

    let instrucaoSql = `
        SELECT
            nomePosicao,
            COUNT(idJogador) AS quantidade
        FROM posicao
        LEFT JOIN jogador_cadastrado
            ON idPosicao = fkPosicao
        GROUP BY idPosicao, nomePosicao
        ORDER BY idPosicao;
    `;

    return database.executar(instrucaoSql);
}

function buscarClassificacao() {

    let instrucaoSql = `
        SELECT
            COUNT(CASE WHEN notaGeral BETWEEN 85 AND 100
                THEN 1 END) AS elite,

            COUNT(CASE WHEN notaGeral BETWEEN 70 AND 84
                THEN 1 END) AS intermediario,

            COUNT(CASE WHEN notaGeral BETWEEN 0 AND 69
                THEN 1 END) AS basico

        FROM jogador_cadastrado;
    `;

    return database.executar(instrucaoSql);
}

function buscarUltimosJogadores() {

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
        ORDER BY idJogador DESC
        LIMIT 5;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpis,
    buscarPosicoes,
    buscarClassificacao,
    buscarUltimosJogadores
};