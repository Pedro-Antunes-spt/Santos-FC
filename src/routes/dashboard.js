let express = require("express");
let router = express.Router();

let dashboardController = require("../controllers/dashboardController");

router.get("/kpis", function (req, res) {
    dashboardController.buscarKpis(req, res);
});

router.get("/posicoes", function (req, res) {
    dashboardController.buscarPosicoes(req, res);
});

router.get("/classificacao", function (req, res) {
    dashboardController.buscarClassificacao(req, res);
});

router.get("/ultimosJogadores", function (req, res) {
    dashboardController.buscarUltimosJogadores(req, res);
});

module.exports = router;