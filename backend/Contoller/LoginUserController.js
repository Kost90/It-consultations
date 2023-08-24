const UserLogin = require("../models/LoginUser");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

let token = [];

const verifyToken = (accesToken) => {
  let token = jwt.verify(accesToken, secretKey);
  console.log(token);
  return token;
};

const getLoginUser = async (req, res) => {
  const username = req.params.username;
  console.log(username);
  try {
    let x = verifyToken(token);
    console.log(x);
    const result = await UserLogin.findOne({ where: { username: username } });
    if (result != null) {
      return res.json(result);
    }
  } catch (err) {
    return res.send("Login user not found");
  }
};

const addNewLoginUser = async (req, res) => {
  let newLoginUser = req.body;
  let username = req.body;
  const payload = { username };
  token = jwt.sign(payload, secretKey, { expiresIn: "30m" });
  console.log("new Loginuser to create", newLoginUser);
  let result = await UserLogin.create(newLoginUser);
  return res.json(result);
};

const deleteLoginUser = async (req, res) => {
  let id = req.params.id;
  const result = await UserLogin.findAll({ where: { id: id } });
  if (result != null) {
    await UserLogin.destroy({ where: { id: id } });
    return res.json(result);
  }
  return res.send("User not found");
};

module.exports = {
  getLoginUser,
  addNewLoginUser,
  deleteLoginUser,
};
