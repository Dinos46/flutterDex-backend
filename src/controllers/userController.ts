import { CreateUserInput } from "../schema/userSchema";
import { createUser } from "../services/userService";
import asyncHandler from "express-async-handler";
import { IReq, IRes } from "../interface/IExpress";

const createUserHandler = asyncHandler(
  async (req: IReq<CreateUserInput>, _: IRes) => {
    const user = createUser(req.body);
    console.log(user);
  }
);

const getUserHandler = asyncHandler(async (req: IReq<any>, res: IRes) => {});

const updateUserHandler = asyncHandler(async (req: IReq<any>, res: IRes) => {});

export { createUserHandler, getUserHandler, updateUserHandler };
