import request from 'supertest';
import app from '../index.js'; 

describe("Book Api Endpoints Tests", () => {
  describe("GET /books/get-books", () => {
    test('should return a list of books', async () => {
      const response = await request(app).get('/api/v1/books/get-books');
      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Books retrieved successfully");
      
    });
  });

});



