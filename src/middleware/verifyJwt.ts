import jwt from "jsonwebtoken";
import config from "config";
import { INext, IReq, IRes } from "../interface/IExpress";

export const verifyJwt = async (req: IReq, res: IRes, nxt: INext) => {
  const accessKey = config.get<string>("accessToken");
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];

  if (!token) return res.status(401);

  jwt.verify(token, accessKey, (err, user) => {
    if (err) return res.status(403);
    req.user = user;
    console.log(user);
    return nxt();
  });
  return;
};
