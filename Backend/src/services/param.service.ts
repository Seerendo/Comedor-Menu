import { Request, Response } from "express";
import { Param } from "../entities/Param";

export default class ParamService {
  createParam = async (req: Request, res: Response) => {
    const { body } = req;
    const result = await Param.save(body);
    return result;
  };
}
