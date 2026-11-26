let dashboardModel = require("../models/dashboardModel");

function buscarKpis(req, res) {

    dashboardModel.buscarKpis()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar KPIs:", erro);
            res.status(500).send("Erro ao buscar KPIs!");
        });
}

function buscarPosicoes(req, res) {

    dashboardModel.buscarPosicoes()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar posições:", erro);
            res.status(500).send("Erro ao buscar posições!");
        });
}

function buscarClassificacao(req, res) {

    dashboardModel.buscarClassificacao()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar classificação:", erro);
            res.status(500).send("Erro ao buscar classificação!");
        });
}

function buscarUltimosJogadores(req, res) {

    dashboardModel.buscarUltimosJogadores()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar jogadores:", erro);
            res.status(500).send("Erro ao buscar jogadores!");
        });
}

module.exports = {
    buscarKpis,
    buscarPosicoes,
    buscarClassificacao,
    buscarUltimosJogadores
};