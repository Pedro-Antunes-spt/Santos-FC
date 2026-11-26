let jogadorModel = require("../models/jogadorModel");

function cadastrar(req, res) {

    let fkUsuario = Number(req.body.idUsuarioServer);
    let fkPosicao = Number(req.body.posicaoServer);
    let nome = req.body.nomeServer;
    let numeroCamisa = Number(req.body.camisaServer);
    let idade = Number(req.body.idadeServer);
    let notaGeral = Number(req.body.notaServer);

    if (!Number.isInteger(fkUsuario) || fkUsuario < 1) {
        res.status(400).send("Usuário inválido!");

    } else if (!nome || nome.trim() == "") {
        res.status(400).send("Informe o nome do jogador!");

    } else if (!Number.isInteger(fkPosicao) || fkPosicao < 1 || fkPosicao > 6) {
        res.status(400).send("Selecione uma posição válida!");

    } else if (!Number.isInteger(idade) || idade < 16 || idade > 50) {
        res.status(400).send("A idade deve estar entre 16 e 50 anos!");

    } else if (!Number.isInteger(numeroCamisa) || numeroCamisa < 1 || numeroCamisa > 99) {
        res.status(400).send("O número da camisa deve estar entre 1 e 99!");

    } else if (req.body.notaServer == null || req.body.notaServer === "" ||
        !Number.isInteger(notaGeral) || notaGeral < 0 || notaGeral > 100) {
        res.status(400).send("A nota geral deve estar entre 0 e 100!");

    } else {

        jogadorModel.cadastrar(
            fkUsuario,
            fkPosicao,
            nome.trim(),
            numeroCamisa,
            idade,
            notaGeral
        )
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar jogador:", erro.code);
                res.status(500).send("Erro ao cadastrar jogador!");
            });
    }
}

function listar(req, res) {

    let fkUsuario = Number(req.params.idUsuario);

    if (!Number.isInteger(fkUsuario) || fkUsuario < 1) {
        res.status(400).send("Usuário inválido!");

    } else {

        jogadorModel.listar(fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar jogadores:", erro.code);
                res.status(500).send("Erro ao listar jogadores!");
            });
    }
}

function favoritar(req, res) {

    let fkUsuario = Number(req.body.idUsuarioServer);
    let fkJogador = Number(req.body.idJogadorServer);

    if (!Number.isInteger(fkUsuario) || fkUsuario < 1 ||
        !Number.isInteger(fkJogador) || fkJogador < 1) {

        res.status(400).send("Usuário ou jogador inválido!");

    } else {

        jogadorModel.favoritar(fkUsuario, fkJogador)
            .then(function (resultado) {

                if (resultado.affectedRows == 0) {
                    res.status(404).send("Jogador não encontrado!");
                } else {
                    res.json(resultado);
                }

            })
            .catch(function (erro) {
                console.log("Erro ao favoritar:", erro.code);
                res.status(500).send("Erro ao favoritar jogador!");
            });
    }
}

function desfavoritar(req, res) {

    let fkUsuario = Number(req.body.idUsuarioServer);
    let fkJogador = Number(req.body.idJogadorServer);

    if (!Number.isInteger(fkUsuario) || fkUsuario < 1 ||
        !Number.isInteger(fkJogador) || fkJogador < 1) {

        res.status(400).send("Usuário ou jogador inválido!");

    } else {

        jogadorModel.desfavoritar(fkUsuario, fkJogador)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao desfavoritar:", erro.code);
                res.status(500).send("Erro ao desfavoritar jogador!");
            });
    }
}

module.exports = {
    cadastrar,
    listar,
    favoritar,
    desfavoritar
};