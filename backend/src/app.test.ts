import supertest from 'supertest';
import app from './app';

describe('basic server stuff', () => {
  it('should return 200 and welcome message for root', async () => {
    const result = await supertest(app).get('/');
    expect(result.statusCode).toEqual(200);
    expect(result.body.message).toEqual('Welcome!');
  });

  it('should return 404 from nonexistent route', async () => {
    const result = await supertest(app).get('/badPath');
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual('url not found');
  });
});
