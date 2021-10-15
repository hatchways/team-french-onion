require("dotenv").config();

const User = require("../models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../app.js");
const request = require("supertest");

chai.should();
chai.use(chaiHttp);

const existingTestUserAccount = {
  password: "testtest", 
  email: "testme@email.com"
}

const newTestUser = {
  password: "testtest", 
  email: "test@email.com",
  username: "imatest"
}

const agent = request.agent(app);

describe("Tests for auth endpoints", () => {
  
  before((done) => {
    agent
      .post("/auth/login")
      .send(existingTestUserAccount)
      .end((err, res) => {
        console.log('here is res: ' + res.text);
        res.should.have.status(200);
        res.body.should.have.property("success");
        res.body.success.should.have.property("user")
        done();
      });
  });

  describe("/GET /auth/user", () => {
    it("it should return user info on success when logged in", (done) => {
      agent
        .get("/auth/user")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("success");
          res.body.success.should.have.property("user")
          done();
        });
    });
  });

  describe("/GET /auth/logout", () => {
    it("it should return 200 along with logout message", (done) => {
      agent
        .get("/auth/logout")
        .end((err, res) => {
          console.log(res.text);
          res.should.have.status(200);
          res.text.should.include("You have successfully logged out");
          done();
        });
    });
  });

  describe("/GET /auth/user", () => {
    it("it should return error when no user logged in", (done) => {
      agent
        .get("/auth/user")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

  describe("/POST /auth/register", () => {
    it("it should return user on success", (done) => {
      request(app)
        .post("/auth/register")
        .send(newTestUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("success");
          res.body.success.should.have.property("user")
          done();
        });
    });
  });

  describe("/POST /auth/register", () => {
    it("it should return 400 when email or username exists", (done) => {
      request(app)
        .post("/auth/register")
        .send(newTestUser)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.have.property("error");
          done();
        });
    });
  });



  describe("/POST /auth/login", () => {
    it("it should return 200 along with user", (done) => {
      request(app)
        .post("/auth/login")
        .send(existingTestUserAccount)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("success");
          res.body.success.should.have.property("user")
          done();
        });
    });
  });

  describe("/POST /auth/login", () => {
    it("it should return 401 with invalid info", (done) => {
      request(app)
        .post("/auth/login")
        .send({
          email: "random@email.com",
          password: "random"
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.text.should.include("Invalid email or password");
          done();
        });
    });
  });
  
  // clears the newTestUser from db to ensure no conflicts on retest
  after(async () => {
    const { email } = newTestUser;
    const result = await User.deleteOne({ email });

    if (result.deletedCount !== 1) throw new Error("Error with user deletion");
  });

});