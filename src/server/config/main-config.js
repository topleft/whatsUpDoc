(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const bodyParser = require('body-parser');
  const morgan = require('morgan');
  const nunjucks = require('nunjucks');

  // *** view folders *** //
  const viewFolders = [
    path.join(__dirname, '..', 'views')
  ];

  appConfig.init = function(app, express) {

    // *** view engine *** //
    nunjucks.configure(viewFolders, {
      express: app,
      autoescape: true
    });
    app.set('view engine', 'html');

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, '..', '..', 'client')));

  };

})(module.exports);
