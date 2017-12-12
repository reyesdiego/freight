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
    this.clientRoutes();
  }

  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
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

  private clientRoutes(): void {

    const router = express.Router();

    router.get("/", (req: express.Request, res: express.Response) => {
      res.status(200).send({
        data: [{ _id: 1, client: "Maerks" }],
        status: "OK"
      });
    });

    router.get("/:_id", (req: express.Request, res: express.Response) => {
      res.status(200).send({
        data: { _id: parseInt(req.params._id, 10), client: `Cliente Nro ${req.params._id}` },
        status: "OK"
      });
    });

    this.express.use("/clients", router);
  }
}

export default new App().express;
