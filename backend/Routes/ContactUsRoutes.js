const express = require('express');
const router = express.Router();
const ContactUsController = require('../Contoller/ContactsController');

router.get('/', ContactUsController.getContactsUsMessages);
router.post('/', ContactUsController.addContactUsMessage);

module.exports = router;