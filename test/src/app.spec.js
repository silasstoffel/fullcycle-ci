const request = require("supertest");
const createServer = require('../../src/server');
const routes = require('../../src/routes');

describe('App-Checker', () => {

    let app;

    beforeEach(() => {
        app = createServer(routes, 0, false);        
    });

    it('should return alive status', async() => {        
        const response = await request(app)
        .get('/alive');

        const { body } = response;

        expect(response.status).toBe(200);
        expect(body.message).toBe('app is Alive');
    });

    it('should return app status ', async() => {
        const params = {param1: 1, param2: 2 };         
        const response = await request(app)
        .post('/app-status')
        .send(params);

        const { database, licenses, redis } = response.body;
        
        expect(response.status).toBe(201);
        expect(database).toBe('on');
        expect(redis).toBe('off');
        expect(licenses).toEqual(['full']);
    });

});
