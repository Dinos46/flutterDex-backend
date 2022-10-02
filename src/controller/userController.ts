import { Request, Response } from "express";
import { CreateUserInput } from "../schema/userSchema";
import { createUser } from "../service/userService";
import asyncHandler from "express-async-handler";

const createUserHandler = asyncHandler(
  async (req: Request<{}, {}, CreateUserInput>, _: Response) => {
    const user = createUser(req.body);
    console.log(user);
  }
);

const getUserHandler = asyncHandler(async (req: Request, res: Response) => {});

const updateUserHandler = asyncHandler(
  async (req: Request, res: Response) => {}
);

export { createUserHandler };
