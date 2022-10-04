import express from "express";
import { getAllHandler } from "../controllers/pokemonController";
const pokeRoutes = express.Router();

pokeRoutes.get("/", getAllHandler);

export default pokeRoutes;
