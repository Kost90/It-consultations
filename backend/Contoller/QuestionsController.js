const { Questions } = require("../models/Associations");
const { Users } = require("../models/Associations");

const getAllQuestions = async (req, res) => {
  const result = await Questions.findAll();
  res.json(result);
};

const getStaffQuestions = async (req, res) => {
  let username = req.params.staffname;
  console.log(username);
  let questions = await Questions.findAll({ where: { to: username } });
  if (questions != null) {
    return res.json(questions); //MAG good work with the return here!
  }
  return res.send("Questions not found");
};

const getUserQuestions = async (req, res) => {
  let username = req.params.username;
  let user = await Users.findOne({ where: { username: username } });
  let userQuestions = await user.getQuestion();
  if (userQuestions != null) {
    return res.json(userQuestions); //MAG good work with the return here!
  }
  return res.send("Questions not found");
};

const addNewQuestion = async (req, res) => {
  let newQuestion = req.body;
  console.log("new question to create", newQuestion);

  let result = await Questions.create(newQuestion);
  return res.json(result);
};

const deleteQuestion = async (req, res) => {
  let id = req.params.id;
  const result = await Questions.findAll({ where: { id: id } });
  if (result != null) {
    await Questions.destroy({ where: { id: id } });
    return res.json(result);
  }
  return res.send("Message not found");
};

module.exports = {
  getAllQuestions,
  getUserQuestions,
  addNewQuestion,
  getStaffQuestions,
  deleteQuestion,
};
