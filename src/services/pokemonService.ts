import PokemonModel from "../models/pokemonModel";

const createPokemon = async (pokemon: any) => {
  const poke = await PokemonModel.create(pokemon);
  return poke;
};

const getAllPokemon = async () => {
  const pokes = await PokemonModel.find().sort("order").limit(20).lean().exec();
  return pokes;
};

// const getEachPokem = async (name: string) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
//   const { data } = await axios.get(url);
//   const pokemon: any = {
//     height: data.height,
//     name: data.name,
//     order: data.order,
//     sprites: [
//       data.sprites.back_default,
//       data.sprites.back_shiny,
//       data.sprites.front_default,
//       data.sprites.front_shiny,
//     ],
//     types: data.types.map((t: any) => t.type.name),
//     weight: data.weight,
//   };

//   return pokemon;
// };

// const getPokemon = async (url: string) => {
//   const { data } = await axios.get(url);
//   return data?.results.map((res: any) => res.name);
// };

// export const createAllPokemon = async () => {
//   console.log("first");
//   try {
//     let url = "https://pokeapi.co/api/v2/pokemon/";
//     const pokPrms: Promise<any>[] = [];
//     const namePrm: Promise<any>[] = [];
//     for (let i = 1; i <= 57; i++) {
//       const r = await getPokemon(url);
//       url = `https://pokeapi.co/api/v2/pokemon?offset=${i * 20}&limit=20`;

//       namePrm.push(...r);
//     }
//     const y = await Promise.allSettled(namePrm);
//     for (let d of y) {
//       if (d.status === "fulfilled") {
//         const po = await getEachPokem(d.value);
//         pokPrms.push(po);
//       }
//     }

//     const arr = await Promise.allSettled(pokPrms);
//     for (let p of arr) {
//       if (p.status === "fulfilled") {
//         await PokemonModel.create(p.value);
//       }
//     }
//     console.log("last", arr);
//   } catch (error) {
//     console.log(error);
//   }
// };

export { createPokemon, getAllPokemon };
