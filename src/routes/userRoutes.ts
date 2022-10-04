import express from "express";
import { createUserHandler } from "../controllers/userController";
import validateRequest from "../middleware/validateRequest";
import { userSchema } from "../schema/userSchema";
const userRoutes = express.Router();

userRoutes.post("/user", validateRequest(userSchema), createUserHandler);

export default userRoutes;
