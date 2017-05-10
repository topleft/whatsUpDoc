const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const checkAuthentication = require('../helpers/auth');

router.get('/check_authentication', checkAuthentication, function (req, res, next) {

  return res.status(200).json({
    message: 'Success, authenticated!',
    user: req.user
  });
});

module.exports = router;
