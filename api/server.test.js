const server = require('./server');
const request = require('supertest');

describe('Server', () => {
  describe('GET / endpoint', () => {
    it('is the right environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

    it('returns proper response body', () => {
      const expectedResponseBody = JSON.stringify({ api: 'up' });
      // the way you work with supertest, you need to first RETURN something
      return (
        request(server)
          .get('/')
          // on this request, you can chain your assertions
          .expect(expectedResponseBody)
          .expect('Content-Length', expectedResponseBody.length.toString())
      );
    });

    it('returns proper response body with query string', () => {
      const expectedResponseBody = JSON.stringify({ api: 'Welcome Samar' });
      return request(server)
        .get('/?name=Samar')
        .expect(expectedResponseBody);
    });

    it('contains cookie', () => {
      return request(server)
        .get('/')
        .expect('Set-Cookie', 'know=true');
    });

    it('has proper status code', () => {
      return request(server)
        .get('/')
        .expect(200);
    });
  });

  describe('GET /hobbits endpoint', () => {
    it('responses with proper status code', () => {
      return request(server)
        .get('/hobbits')
        .expect(200);
    });

    // with async await
    it('res body has proper length', async () => {
      const hobbitsArray = await request(server).get('/hobbits');
      expect(hobbitsArray.body).toHaveLength(0);
    });

    // testing with .then()
    it('responses with proper status code with .then(', () => {
      return request(server)
        .get('/hobbits')
        .then(res => {
          expect(200);
        });
    });
  });
});
