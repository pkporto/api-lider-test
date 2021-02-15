const request = require('supertest');
const app = require('./server');


describe("Routes test", () => {
    it("Should get all Products", async () => {
        const res = await request(app)
            .get('/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });

    it("Should get products by categories", async () => {
        const res = await request(app)
            .get('/products/').query('electonics');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });

});