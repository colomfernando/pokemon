export interface Ability {
  name: string;
}

export interface Abilities {
  ability: Ability;
}

export interface Form {
  name: string;
}

export interface Move {
  name: string;
}

export interface Specie {
  name: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Sprite {
  front_default: string;
  other: {
    home: {
      front_default: string;
    };
  };
}

export interface ColorType {
  [name: string]: {
    color: string;
    contrastText: string;
  };
}

export interface Pokemon {
  name: string;
  abilities: Abilities;
  forms: Form[];
  height: number;
  id: number;
  moves: Move[];
  species: Specie;
  weight: number;
  types: Type[];
  sprites: Sprite;
  stats: Stat[];
  order: number;
}

export interface ResultPokemon {
  name: string;
  url: string;
}

export interface ListPokemons {
  count: number;
  results: ResultPokemon[];
}

export interface InitialStore {
  loading: boolean;
  selectedPokemon: Record<string, never> | Pokemon;
  pokemons: [] | ResultPokemon[];
}

export interface Action<P> {
  type: string;
  payload: P;
}

export type Actions = Action<Pokemon> | Action<ResultPokemon[]>;
