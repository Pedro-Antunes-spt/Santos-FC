let express = require("express");
let router = express.Router();

let jogadorController = require("../controllers/jogadorController");

router.post("/cadastrar", function (req, res) {
    jogadorController.cadastrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    jogadorController.listar(req, res);
});

module.exports = router;