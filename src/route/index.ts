import express, { Response } from "express";
import authRouts from "./authRouts";
import userRouts from "./userRouts";
const router = express.Router();

router.get("/health", (_, res: Response) => {
  res.status(200).json({ msg: "success" });
});

router.use(authRouts);
router.use(userRouts);

export default router;
