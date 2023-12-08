import request from 'supertest';
import app from '../index.js';

describe("Challenge API Endpoints Tests", () => {
    describe("GET /challenges/get-challenge", () => {
        // Test case for successfully getting challenge
        test("should get challenge details for an existing user", async () => {
        const response = await request(app)
            .get("/api/v1/challenges/get-challenge")
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTcyMTAyM2IwYzJmMzkwZjU5NjA4M2IiLCJlbWFpbCI6InN5ZWRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyYWpvIiwiaWF0IjoxNzAxOTc0MTM4LCJleHAiOjE3MDIwNjA1Mzh9.biSmai7xqw8u32ipn6X3-FF_x6o1mGi9J208YuJPv0g');

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("This is your yealy challenge");
        });

    });

    describe("POST /challenges/add-target-books", () => {
        
        // Test case for successfully adding target books
        test('should add target books for an existing user', async () => {
          const validAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTcyMTAyM2IwYzJmMzkwZjU5NjA4M2IiLCJlbWFpbCI6InN5ZWRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyYWpvIiwiaWF0IjoxNzAxOTc0MTM4LCJleHAiOjE3MDIwNjA1Mzh9.biSmai7xqw8u32ipn6X3-FF_x6o1mGi9J208YuJPv0g';
          const response = await request(app)
            .post('/api/v1/challenges/add-target-books')
            .set('Authorization', `Bearer ${validAccessToken}`)
            .send({ targetBooks: 10 });
      
          expect(response.status).toBe(200);
          expect(response.body.success).toBe(true);
          expect(response.body.message).toBe('Target number of books added for the yearly challenge');

        });  
    });
    describe("PATCH/challenges/update-target-books", () => {
        
        // Test case for successfully updating target books
        test('should update target books for an existing user', async () => {
          const validAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTcyMTAyM2IwYzJmMzkwZjU5NjA4M2IiLCJlbWFpbCI6InN5ZWRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyYWpvIiwiaWF0IjoxNzAxOTc0MTM4LCJleHAiOjE3MDIwNjA1Mzh9.biSmai7xqw8u32ipn6X3-FF_x6o1mGi9J208YuJPv0g'; 
          const response = await request(app)
            .patch('/api/v1/challenges/update-target-books')
            .set('Authorization', `Bearer ${validAccessToken}`)
            .send({ targetBooks: 10 });
      
          expect(response.status).toBe(200);
          expect(response.body.success).toBe(true);
          expect(response.body.message).toBe('Target number of books added or updated for the yearly challenge');
          expect(response.body.challengeDetails).toEqual({
            username: 'rajo',
            year: new Date().getFullYear(),
            targetBooks: 10,
            completedBooks: 0,
            progress: "0%",
            challengeStart: expect.any(String),
            challengeEnd: expect.any(String),
          });
        });  
    describe("DELETE/challenges/delete-challenge", () => {
        
        // Test case for successfully deleting challenge
        test('should delete yearly challenge details for an existing user', async () => {
          const validAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NTcyMTAyM2IwYzJmMzkwZjU5NjA4M2IiLCJlbWFpbCI6InN5ZWRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJyYWpvIiwiaWF0IjoxNzAxOTc0MTM4LCJleHAiOjE3MDIwNjA1Mzh9.biSmai7xqw8u32ipn6X3-FF_x6o1mGi9J208YuJPv0g'; 
          const response = await request(app)
            .delete('/api/v1/challenges/delete-challenge')
            .set('Authorization', `Bearer ${validAccessToken}`)
            .send({ targetBooks: 10 });
      
          expect(response.status).toBe(200);
          expect(response.body.success).toBe(true);
          expect(response.body.message).toBe('Yearly challenge deleted successfully');
        });       

    });
});
});

 