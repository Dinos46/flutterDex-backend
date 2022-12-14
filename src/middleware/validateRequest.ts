import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import logger from "../services/loggerService";

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
      if (err instanceof ZodError) {
        logger.error("Not a valid input", err.flatten());
        return res.send(err.flatten());
      } else {
        logger.error("ERROR", err);
        return res.status(400).send(err.errors);
      }
    }
  };

export default validateRequest;
