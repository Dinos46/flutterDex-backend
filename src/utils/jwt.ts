import jwt from "jsonwebtoken";
import config from "config";
import { CreateUserInput } from "../schema/userSchema";

export const signJet = async (
  user: Omit<CreateUserInput, "password">,
  key: "refreshToken" | "accessToken",
  options?: jwt.SignOptions
) => {
  const singKey = config.get<string>(key);

  return jwt.sign(user, singKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};
