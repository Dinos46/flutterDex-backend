import UserModel from "../model/userModel";
import { CreateUserInput } from "../schema/userSchema";

const createUser = async (user: CreateUserInput) => {
  return await UserModel.create(user);
};

const updateUser = async () => {};

const getUser = async (id: string) => {
  return await UserModel.findById(id).lean().exec();
};

export { createUser, updateUser, getUser };
