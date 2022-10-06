import { sign } from "jsonwebtoken";
import config from "config";
import { CreateUserInput } from "../schema/userSchema";

export const signJwt = (
  user: CreateUserInput,
  key: "refreshToken" | "accessToken"
) => {
  const singKey = config.get<string>(key).toString();
  const userCreds = {
    email: user.email,
    username: user.username,
  };

  return sign(userCreds, singKey);
};
