
const express = require('express');
const router = express.Router();
const questionsController = require('../Contoller/QuestionsController');


router.get('/', questionsController.getAllQuestions);
router.get('/:username', questionsController.getUserQuestions);
router.get('/staff/:staffname', questionsController.getStaffQuestions);
router.post('/', questionsController.addNewQuestion);
router.delete('/:id', questionsController.deleteQuestion);

module.exports = router;

