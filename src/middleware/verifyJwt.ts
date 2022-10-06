import { verify } from "jsonwebtoken";
import config from "config";
import { INext, IReq, IRes } from "../interface/IExpress";

export const verifyJwt = (req: IReq<any>, res: IRes, nxt: INext) => {
  const accessKey = config.get<string>("accessToken");
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];

  if (!token) return res.status(401);

  const data = verify(token, accessKey);
  console.log(data);
  return nxt();
};
