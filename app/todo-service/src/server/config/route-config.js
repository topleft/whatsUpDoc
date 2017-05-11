(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const authRoutes = require('../routes/auth');
    const todosRoutes = require('../routes/todos');

    // *** register routes *** //
    app.use('/todo-service', authRoutes);
    app.use('/todo-service', todosRoutes);

  };

})(module.exports);
