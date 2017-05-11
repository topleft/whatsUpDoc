const express = require('express');
const router = express.Router();
const checkAuthentication = require('../helpers/auth');

router.get('/todos', function (req, res, next) {
  return res.status(200).json({data: []})
});

module.exports = router;
