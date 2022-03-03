const request = require("supertest");
const app = require("../../app");

describe("register", () => {
  it("return status code 201 if first name is created successfully", async () => {
    const res = await request(app)
      .post("/register")
      .send({ firstName: "John" });

    expect(res.statusCode).toEqual(201);
  });
  it("return a bad request if firstName is missing", async () => {
    const res = await request(app)
      .post("/register")
      .send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual("you need to pass a firstName");
  });
});
