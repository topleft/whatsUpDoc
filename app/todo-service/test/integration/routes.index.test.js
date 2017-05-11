process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.use(chaiHttp);

const server = require('../../src/server/app');

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
      .get('/todos-service/todos')
      .end((err, res) => {
        res.redirects.length.should.equal(0);
        res.status.should.equal(200);
        res.type.should.equal('json');
        res.body.data.should.be.a('array')
        done();
      });
    });
  });

  // describe('GET /404', () => {
  //   it('should throw an error', (done) => {
  //     chai.request(server)
  //     .get('/404')
  //     .end((err, res) => {
  //       res.redirects.length.should.equal(0);
  //       res.status.should.equal(404);
  //       res.type.should.equal('application/json');
  //       res.body.message.should.eql('Not Found');
  //       done();
  //     });
  //   });
  });

});
