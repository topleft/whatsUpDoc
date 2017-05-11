process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(chaiHttp);

const server = require('../../src/server/app');

const tests = () => {
  describe('routes : todos', () => {

    beforeEach((done) => {
      done();
    });

    afterEach((done) => {
      done();
    });

    describe('GET /', () => {
      it('should get the todos', (done) => {
        chai.request(server)
        .get('/todo-service/todos')
        .end((err, res) => {
          res.redirects.length.should.equal(0);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.data.should.be.a('array')
          done();
        });
      });
    });

  });
}

module.exports = tests;
