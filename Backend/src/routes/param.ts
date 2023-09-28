import { Router } from "express";
import ParamController from "../controllers/param.controller";
const router = Router();

const paramController = new ParamController();

router.get("/", (req, res) => {
  console.log("Hola Mundo");
});

router.post("/", paramController.createParam);

export { router };
