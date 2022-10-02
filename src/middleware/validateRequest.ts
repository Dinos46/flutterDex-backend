import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import logger from "../service/loggerService";

const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, nxt: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return nxt();
    } catch (err) {
      logger.error("Not a valid input", err);
      return res.status(400).send(err.errors);
    }
  };

export default validateRequest;
