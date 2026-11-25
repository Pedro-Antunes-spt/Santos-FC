
let usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (!email) {
        res.status(400).send("Informe seu e-mail!");

    } else if (!senha) {
        res.status(400).send("Informe sua senha!");

    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {

                    if (resultadoAutenticar.length == 1) {

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email
                        });

                    } else {
                        res.status(403).send("E-mail ou senha inválidos!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log("Erro ao realizar o login:", erro.code);
                    res.status(500).send("Erro ao realizar o login!");
                }
            );
    }
}

function cadastrar(req, res) {

    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    if (!nome) {
        res.status(400).send("Informe seu nome!");

    } else if (!email) {
        res.status(400).send("Informe seu e-mail!");

    } else if (!senha) {
        res.status(400).send("Informe sua senha!");

    } else if (senha.length < 8) {
        res.status(400).send("A senha deve possuir pelo menos 8 caracteres!");

    } else {

        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("Erro ao realizar o cadastro:", erro.code);
                    res.status(500).send("Erro ao realizar o cadastro!");
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
};