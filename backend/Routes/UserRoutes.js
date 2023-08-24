const express = require("express");
const router = express.Router();
const userController = require('../Contoller/userController');

router.get("/", userController.getAllUsers);

router.get("/:password/:username", userController.getSingleUser);

router.post("/", userController.addNewUser);

router.put("/:search", userController.editUser);

router.delete("/:search", userController.deleteUser);

module.exports = router;
