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
          .get('/?name=Samar')
          // on this request, you can chain your assertions
          .expect(expectedResponseBody)
          .expect('Content-Length', expectedResponseBody.length.toString())
      );
    });
  });

  // describe('GET /hobbits endpoint', () => {});
});
