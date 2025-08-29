const express = require('express');
const router = express.Router();
const { processData } = require('../controllers/dataController');

// POST route for processing data
router.post('/bfhl', processData);

module.exports = router;
