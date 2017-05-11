const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const knex = require('../../connection');

const authHelpers = {

  encodeToken(user) {
    const playload = {
      exp: moment().add(14, 'days').unix(),
      iat: moment().unix(),
      sub: user.id,
      username: user.username
    };
    return jwt.sign(playload, process.env.WUD_TOKEN_SECRET);
  },

  decodeToken(token) {
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
  },

  comparePass(userpass, dbpass) {
    bcrypt.compareSync(userpass, dbpass);
  },

  checkAuthentication(req, res, next) {
    if (!(req.headers && req.headers.authorization)) {
      return res.status(400).json({
        message: 'Please log in'
      });
    }
    // decode the token
    var header = req.headers.authorization.split(' ');
    var token = header[1];
    authHelpers.decodeToken(token)
      .then((payload) => {
        return knex('Users').where({id: parseInt(payload.sub)}).first()
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
  },

  createUser(user) {
    return new Promise((resolve, reject) => {
      handleUserErrors(user)
        .then(() => {
          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(user.password, salt);
          knex('Users').insert({
            username: user.username,
            password: hash
          }, '*')
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  },

  editUser(user, id) {
    return handleUserErrors(user).then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(user.password, salt);
      return knex('Users').where({id: id}).update({
        username: user.username,
        password: hash
      }, '*');
    });
  }

};

const handleUserErrors = (user) => {
  return new Promise((resolve,reject) => {
    if (user.username.length < 6) {
      reject({
        err:'username_length',
        message:'Username must be longer than 6 characters'
      });
    } else if (user.password.length < 6) {
      reject({
        err:'password_length',
        message:'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
};

module.exports = authHelpers;
