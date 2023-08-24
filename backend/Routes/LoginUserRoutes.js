const express = require("express");
const router = express.Router();
const loginUserController = require('../Contoller/LoginUserController');
// const {LoginAutorization} = require('../Midleware/AutorizationController')

router.get("/:username", loginUserController.getLoginUser);
router.post("/", loginUserController.addNewLoginUser);
router.delete("/:id", loginUserController.deleteLoginUser);

module.exports = router;