import PokemonModel from "../models/pokemonModel";

const createPokemon = async (pokemon: any) => {
  const poke = await PokemonModel.create(pokemon);
  return poke;
};

const getAllPokemon = async () => {
  const pokes = await PokemonModel.find().lean().exec();
  return pokes;
};

export { createPokemon, getAllPokemon };
