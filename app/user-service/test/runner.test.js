const authRoutes = require('./routes/auth/auth');
const authHelpers = require('./helpers/auth');

const testRunner = Promise.resolve();


console.log('in the tests', process.cwd());
authRoutes();
authHelpers();
