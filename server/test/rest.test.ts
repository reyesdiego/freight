import * as chai from "chai";
import chaiHttp = require("chai-http");
import * as mocha from "mocha";

import Client from "../src/routes/clients";
import express from "../src/include/app";
import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/mean-angular5", { useMongoClient: true });
(<any>mongoose).Promise = global.Promise;

const app = express.express;
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

  express.setRoute("/clients", Client);
  it("/clients should have a status prop eq to OK", () => {
    return chai.request(app).get("/clients")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
    });
  });

  it("/clients/:_id should have a status prop eq to OK", () => {
    return chai.request(app).get("/clients/23250578")
    .then((res) => {
      expect(res.type).to.eql("application/json");
      expect(res.body.status).to.eql("OK");
      expect(res.body.data._id).to.eql(23250578);
    });
  });

});
