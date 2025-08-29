const express = require('express');
const router = express.Router();
const { processData } = require('../controllers/dataController');

// GET route for operation_code
router.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

// POST route for processing data
router.post('/bfhl', processData);

module.exports = router;
