import express from "express";
import {
  createUserHandler,
  getUserByEmailHandler,
  updateUserHandler,
  getUserByIdHandler,
} from "../controllers/userController";
import validateRequest from "../middleware/validateRequest";
import {
  createUser,
  updateUser,
  getUserByEmail,
  getUserById,
} from "../schema/userSchema";
const userRoutes = express.Router();

userRoutes.post("/user", validateRequest(createUser), createUserHandler);

userRoutes.put("/user", validateRequest(updateUser), updateUserHandler);

userRoutes.get(
  "/userMail/:email",
  validateRequest(getUserByEmail),
  getUserByEmailHandler
);

userRoutes.get("/userId/:id", validateRequest(getUserById), getUserByIdHandler);

export default userRoutes;
