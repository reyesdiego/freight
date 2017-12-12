import * as debug from "debug";
import * as http from "http";

import App from "./include/app";

debug("ts-express:server");

const port = process.env.PORT || 3000;
App.set("port", port);

const server = http.createServer(App);
server.listen(port);

server.on("error", (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on("listening", (): void => {
  const addr = server.address();
  const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});
