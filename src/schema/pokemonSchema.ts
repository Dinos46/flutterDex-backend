import { object, TypeOf, string } from "zod";

export const pokemonSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
  }),
});

export type PokemonCreateInput = TypeOf<typeof pokemonSchema>["body"];
