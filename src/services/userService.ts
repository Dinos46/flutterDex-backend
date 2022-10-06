import UserModel from "../models/userModel";
import { CreateUserInput, UpdateUserInput } from "../schema/userSchema";
import mongoose from "mongoose";
// import { signJwt } from "../utils/jwt";

const createUser = async (user: CreateUserInput) => {
  // const token = signJwt(user, "accessToken");

  return await UserModel.create(user);
};

const updateUser = async (user: UpdateUserInput) => {
  const dbUser = await UserModel.findOne({ _id: user.id }).exec();

  if (!dbUser) {
    return { message: "user not found" };
  }

  if (user.pokemon) {
    const pokeId = new mongoose.Types.ObjectId(user.pokemon);
    dbUser.pokemon?.push(pokeId);
  }

  if (user.username) {
    dbUser.username = user.username;
  }

  await dbUser.save();
  return dbUser;
};

const getUserById = async (id: string) => {
  const user = await UserModel.findById(id)
    .select("-password")
    .populate("pokemon")
    .lean()
    .exec();

  return user;
};

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email })
    .select("-password")
    .populate("pokemon")
    .lean()
    .exec();
  return user;
};

export { createUser, updateUser, getUserById, getUserByEmail };
