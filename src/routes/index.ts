import express, { Response } from "express";
import authRoutes from "./authRoutes";
import pokeRoutes from "./pokemonRoutes";
import userRoutes from "./userRoutes";
const router = express.Router();

router.get("/health", (_, res: Response) => {
  res.status(200).json({ msg: "success" });
});

router.use(authRoutes);
router.use(userRoutes);
router.use(pokeRoutes);

export default router;
