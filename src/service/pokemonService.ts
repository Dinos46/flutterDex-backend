import PokemonModel, { Pokemon } from "../model/pokemonModel";

const createPokemon = async (pokemon: any) => {
  return await PokemonModel.create(pokemon);
};

const updateUser = async () => {};

const getUser = async () => {};
