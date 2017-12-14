import * as express from "express";
import * as user from "../models/users";

class Client {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.router.get("/", (req, res) => {
            user.find()
            .exec()
            .then( data => {
                    res.status(200).send({
                        data: data,
                        status: "OK"
                      });
            });
        });
    }
}
export default new Client().router;

