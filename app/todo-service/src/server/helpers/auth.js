'usr strict';

const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

const decodeToken = (token) => {
  // is jwt verify async?
  const payload = jwt.verify(token, process.env.WUD_TOKEN_SECRET);
  const now = moment().unix();
  return new Promise((resolve, reject) => {
    // TODO what does jwt verify return if token is invalid?
    if (!payload) {
      reject('Invalid token.');
    } else if (payload.exp && now > payload.exp) {
      reject('Token has expired.');
    } else {
      resolve(payload);
    }
  });
};

const checkAuthentication = (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      message: 'Please log in'
    });
  }
  // decode the token
  var header = req.headers.authorization.split(' ');
  var token = header[1];
  decodeToken(token)
    .then((payload) => {
      return knex('users').where({id: parseInt(payload.sub)}).first()
        .then((user) => {
          req.user = {id: user.id};
          next();
        });
    })
    .catch((err) => {
      return res.status(401).json({
        message: err
      });
    });
};

module.exports = checkAuthentication;
