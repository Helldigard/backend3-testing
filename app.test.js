import request from "supertest";
import app from "./app.js"; 

describe("Adoption Router", () => {
    it("GET /api/adoptions debe devolver 200", async () => {
        const res = await request(app).get("/api/adoptions");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true); 
    });

    it("POST /api/adoptions debe crear una adopción", async () => {
        const res = await request(app)
        .post("/api/adoptions")
        .send({ petId: "123", userId: "456" });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("_id"); 
    });


    it("POST /api/adoptions sin body debe devolver 400", async () => {
        const res = await request(app).post("/api/adoptions").send({});
        expect(res.statusCode).toBe(400);
    });
    });
