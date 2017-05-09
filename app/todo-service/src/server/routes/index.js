const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const checkAuthentication = require('../helpers/auth');

router.get('/ping', checkAuthentication, function (req, res, next) {
  return res.status(200).json({message: 'pong'});
});

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

module.exports = router;
