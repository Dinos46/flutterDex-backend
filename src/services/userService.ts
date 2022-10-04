import UserModel from "../models/userModel";
import { CreateUserInput } from "../schema/userSchema";

const createUser = async (user: CreateUserInput) => {
  return await UserModel.create(user);
};

const updateUser = async () => {};

const getUserById = async (id: string) => {
  return await UserModel.findById(id).select("-password").lean().exec();
};

export { createUser, updateUser, getUserById };
