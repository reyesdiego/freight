import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as mocha from "mocha";

import app from "../src/include/app";

chai.use(chaiHttp);
const expect = chai.expect;

describe("baseRoute", () => {

  it("/ should have a status prop eq to OK", () => {
    return chai.request(app).get("/")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
    });
  });

});

describe("clientsRoute", () => {

  it("/clients should have a status prop eq to OK", () => {
    return chai.request(app).get("/clients")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
    });
  });

  it("/clients/:_id should have a status prop eq to OK", () => {
    return chai.request(app).get("/clients/1")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
      expect(res.body.data._id).to.eql(1);
    });
  });

});
