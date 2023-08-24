const { answers } = require("../models/Associations");

const getAllAnswers = async (req, res) => {
  const result = await answers.findAll();
  res.json(result);
};

const getUserAnswers = async (req, res) => {
  let username = req.params.username;
  let answer = await answers.findAll({ where: { to: username } });
  if (answer.length !== 0) {
    return res.json(answer); //MAG good work with the return here!
  }
  return res.send("Answers not found");
};

const getStaffAnswers = async (req, res) => {
  let username = req.params.answerfrom;
  let answer = await answers.findAll({ where: { from: username } });
  if (answer.length !== 0) {
    return res.json(answer); //MAG good work with the return here!
  }
  return res.send("Answers not found");
};

const addNewAnswer = async (req, res) => {
  let newAnswer = req.body;
  console.log("new answer to create", newAnswer);

  let result = await answers.create(newAnswer);
  return res.json(result);
};

module.exports = {
  getAllAnswers,
  getUserAnswers,
  addNewAnswer,
  getStaffAnswers,
};
