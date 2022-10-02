import express from "express";
import { createUserHandler } from "../controller/userController";
import validateRequest from "../middleware/validateRequest";
import { userSchema } from "../schema/userSchema";
const userRouts = express.Router();

userRouts.post("/user", validateRequest(userSchema), createUserHandler);

export default userRouts;
