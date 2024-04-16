import request from 'supertest'
import app from '../src/index'

const api = request(app)


describe('GET', () => {
    it('should respond with JSON format', async () => {
        const response = await api.get('/v1/products');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
    });


    it('should respond with JSON format', async () => {
        const productId = '66172839bde0c73f2ddbfd7a';
        const response = await api.get(`/v1/products/${productId}`);
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
        expect(response.body._id).toBe(productId);
        expect(response.body).toEqual(expect.objectContaining({ _id: productId }));
    });
});


describe('PUT', () => {
    it('should update a product by ID', async () => {
        const productId = '661945ad3be5585894c9b6c4';
        const mockProduct = {
            title: "Puedo modificar el titulo para testear",
            description: "Touch Gen Doble Protección",
            img: {
                src: "http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg",
                alt: "Imagen de Funda ipod",
            },
            price: 6600
        }
        const response = await api.put(`/v1/products/${productId}`).send(mockProduct);
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toEqual(expect.stringContaining('application/json'));
        expect(response.body._id).toBe(productId);
        expect(response.body).toEqual(expect.objectContaining({ _id: productId }));
    });
})

