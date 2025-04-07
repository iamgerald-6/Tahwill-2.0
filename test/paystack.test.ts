// // const request = require("supertest");
// // const app = require("../src/app"); 

// describe("Paystack Webhook", () => {
//   const duplicatePayload = {
//     event: "charge.success",
//     data: {
//       id: 987654321,
//       reference: "test_ref_456",
//       amount: 20000,
//       currency: "NGN",
//       status: "success",
//       paid_at: new Date().toISOString(),
//       customer: {
//         email: "test@example.com",
//       },
//     },
//   };

//   it("should process successful payment", async () => {
//     const testPayload = {
//       event: "charge.success",
//       data: {
//         id: 987654321,
//         reference: "test_ref_456",
//         amount: 20000,
//         currency: "NGN",
//         status: "success",
//         paid_at: new Date().toISOString(),
//         customer: {
//           email: "test@example.com",
//         },
//       },
//     };

//     const response = await request(app)
//       .post("/api/webhook")
//       .set("x-paystack-signature", "12345achbcde") // Use the test signature here
//       .send(testPayload);

//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe("Payment saved successfully");
//   });

//   it("should reject duplicate payments", async () => {
//     // First request
//     await request(app)
//       .post("/api/webhook")
//       .send(duplicatePayload)
//       .set("x-paystack-signature", "test_signature");

//     // Second request with same reference
//     const response = await request(app)
//       .post("/api/webhook")
//       .send(duplicatePayload)
//       .set("x-paystack-signature", "test_signature");

//     expect(response.statusCode).toBe(200);
//     expect(response.body.message).toBe("Payment already processed");
//   });
// });
