import asyncHandler from "express-async-handler";
import { IReq, IRes } from "../interface/IExpress";
import { getAllPokemon } from "../services/pokemonService";

const getAllHandler = asyncHandler(async (_: IReq<any>, res: IRes) => {
  const pokemon = await getAllPokemon();
  res.send(pokemon);
});

export { getAllHandler };
