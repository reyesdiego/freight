import * as express from "express";
import * as user from "../models/users";
import { Result } from "../interfaces/result";

class Client {
    public router: express.Router;

    constructor() {
        this.router = express.Router();

        this.router.get("/", (req: express.Request, res: express.Response) => {
            user.find()
            .then( data => {
                    res.status(200).send({
                        data: data,
                        status: "OK"
                      });
            });
        });

        this.router.get("/:_id", (req: express.Request, res: express.Response) => {
            const id = req.params._id;
            user.findOne({_id: id})
            .then( data => {
                    res.status(200).send({
                        data: data,
                        status: "OK"
                      });
            });
        });

        this.router.post("/add", (req: express.Request, res: express.Response) => {
            user.create(req.body)
            .then( (data) => {
                const result: Result = {
                    data: data,
                    status: "OK"
                };
                res.status(200).send(result);
            });
        });
    }
}
export default new Client().router;

