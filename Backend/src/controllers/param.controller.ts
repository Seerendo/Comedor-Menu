import { Request, Response } from "express";
import ParamService from "../services/param.service";

export default class ParamController {
  createParam = async (req: Request, res: Response) => {
    const paramService = new ParamService();
    try {
      const param = await paramService.createParam(req, res);
      res.status(201).json(param);
    } catch (error) {
      console.log(error)
      res.status(500);
    }
  };
}
