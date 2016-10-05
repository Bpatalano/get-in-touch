const express = require('express');
const contacts = require('./controllers/contacts');

const router = express.Router();

router.get('/contacts', contacts.fetch);

module.exports = router;
