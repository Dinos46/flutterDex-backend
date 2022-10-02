import config from "config";
import express from "express";
import { connecrDb } from "./service/dbService";
import logger from "./service/loggerService";
import cors from "cors";
import router from "./route";
import axios from "axios";
import { IPokemon } from "./interface/IPokemon";
import PokemonModel from "./model/pokemonModel";

const port = config.get("port");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
const getEachPokem = async (name: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const { data } = await axios.get(url);

  const pokemon: IPokemon = {
    height: data.height,
    name: data.name,
    species: data.species,
    sprites: {
      back_default: data.sprites.back_default,
      back_shiny: data.sprites.back_shiny,
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
    },
    types: data.types,
    weight: data.weight,
  };
  return pokemon;
};

const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const { data } = await axios.get(url);
  const pokePrms = [];
  for (let res of data.results) {
    pokePrms.push(getEachPokem(res.name));
  }
  const res = await Promise.all(pokePrms);
  const pokRes = await PokemonModel.insertMany(res);
  console.log(pokRes);
};
getPokemon();

app.listen(port, () => {
  logger.info(`server is listening on http://localhost:${port}`);
  connecrDb();
});
