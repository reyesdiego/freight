import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

class App {

  public express: express.Application;

  constructor() {

    this.express = express();
    this.middleware();
    this.routes();

  }

  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.all("/*", (req: express.Request, res: express.Response, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, token");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
      // res.header('Access-Control-Request-Method', 'GET');
      res.header("Access-Control-Request-Headers", "Content-Type, token");
      res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
      res.header("Expires", "-1");
      res.header("Pragma", "no-cache");

      if ("OPTIONS" === req.method) {
          res.status(200).send();
      } else {
          next();
      }
    });
  }

  private routes(): void {
    const router = express.Router();
    router.get("/", (req, res, next) => {
      res.status(200).send({
        data: [],
        message: "Sistema Fletes",
        status: "OK"
      });
    });
    this.express.use("/", router);
  }

  public setRoute(prefix: string, router: express.Router) {
    this.express.use(prefix, router);
  }
}

export default new App();
