import {
  CreateUserInput,
  GetUserByEmailInput,
  GetUserByIdInput,
  UpdateUserInput,
} from "../schema/userSchema";
import {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../services/userService";
import asyncHandler from "express-async-handler";
import { IReq, IRes } from "../interface/IExpress";

// @ GET USER BY EMAIL
//@ GET REQUEST
const getUserByEmailHandler = asyncHandler(
  async (req: IReq<{}, GetUserByEmailInput>, res: IRes) => {
    const { email } = req.params;
    const user = await getUserByEmail(email);

    res.send(user);
  }
);

// @ GET USER BY ID
//@ GET REQUEST
const getUserByIdHandler = asyncHandler(
  async (req: IReq<{}, GetUserByIdInput>, res: IRes) => {
    const { id } = req.params;
    const user = await getUserById(id);

    res.send(user);
  }
);

// @ CREATE NEW User
//@ POST REQUEST
const createUserHandler = asyncHandler(
  async (req: IReq<CreateUserInput, {}>, res: IRes) => {
    const user = await createUser(req.body);
    res.send(user);
  }
);

// @ UPDATE USER
//@ PUT REQUEST
const updateUserHandler = asyncHandler(
  async (req: IReq<UpdateUserInput, {}>, res: IRes) => {
    const user = await updateUser(req.body);
    res.send(user);
  }
);

export {
  createUserHandler,
  getUserByEmailHandler,
  updateUserHandler,
  getUserByIdHandler,
};
