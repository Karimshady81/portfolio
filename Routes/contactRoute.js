const express = require('express');
const router = express.Router();
const contactsController = require('../Controllers/contactsController');

router.post('/', contactsController.contact_create_post);

module.exports = router;