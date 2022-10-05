export interface IPokemon {
  height: number;
  id?: number;
  // moves: Move[];
  name: string;
  species: Ability;
  sprites: Sprites;
  //   stats: Stat[];
  types: Type[];
  weight: number;
  order: number;
}

interface Type {
  slot: number;
  type: Ability;
}

// interface Stat {
//   base_stat: number;
//   effort: number;
//   stat: Ability;
// }

interface Sprites {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
}

// interface Move {
//   move: Ability;
// }

interface Ability {
  name: string;
  url: string;
}
