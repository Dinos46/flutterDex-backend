import express from "express";
import { getAllHandler } from "../controllers/pokemonController";
const pokeRoutes = express.Router();

pokeRoutes.get("/pokemon", getAllHandler);

export default pokeRoutes;
