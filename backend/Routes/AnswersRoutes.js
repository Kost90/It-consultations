const express = require('express');
const router = express.Router();
const AnswersController = require('../Contoller/AnswersController');


router.get('/', AnswersController.getAllAnswers);
router.get('/:username', AnswersController.getUserAnswers);
router.get('/staff/:answerfrom', AnswersController.getStaffAnswers);
router.post('/', AnswersController.addNewAnswer);

module.exports = router;