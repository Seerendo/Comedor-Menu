import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {router} from "./routes";

const app = express();

app.use(router);

app
  .use(morgan("dev"))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

export default app;
