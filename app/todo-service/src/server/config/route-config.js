(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const authRoutes = require('../routes/auth');

    // *** register routes *** //
    app.use('/todo-service', authRoutes);

  };

})(module.exports);
