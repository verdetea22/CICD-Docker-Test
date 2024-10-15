import chai from 'chai';
import chaiHttp from 'chai-http';
import { app as server } from '../index.js'; // ESM module import

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello World message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World from Docker and CI/CD!');
        done();
      });
  });
});
