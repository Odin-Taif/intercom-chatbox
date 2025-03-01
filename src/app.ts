import express, { Router } from "express";
import bodyParser from "body-parser";

import path from "path";
import { fileURLToPath } from "url";
import { finalCanvas, initialCanvas } from "./intercomt-config.js";
export function createApp() {
  const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(express.static(path.join(__dirname)));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cookieParser());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ status: "ready" });
  });

  // const v1Router = Router();
  // v1Router.use("/", postFeature.router);
  // v1Router.use("/", userFeature.router);

  // const apiRouter = Router();
  // apiRouter.use("/api/v1", v1Router);

  // app.use("/", apiRouter);

  // app.use("/", apiRouter);
  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });
  // app.post("/initialize", (request, response) => {
  //   response.send(initialCanvas);
  // });
  // app.post("/submit", (request, response) => {
  //   if (request.body.component_id == "submit_button") {
  //     response.send(finalCanvas);
  //   } else {
  //     response.send(initialCanvas);
  //   }
  // });
  return app;
}
