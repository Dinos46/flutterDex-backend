import jwt from "jsonwebtoken";
import config from "config";
import { Request, Response, NextFunction } from "express";

export const verifyJwt = async (
  req: Request,
  res: Response,
  nxt: NextFunction
) => {
  const accessKey = config.get<string>("accessToken");
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];

  if (!token) return res.status(401);

  jwt.verify(token, accessKey, (err, user) => {
    if (err) return res.status(403);
    // req.user = user
    console.log(user);
    return nxt();
  });
  return;
};
