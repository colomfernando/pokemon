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

export interface Sprite {
  front_default: string;
  other: {
    home: {
      front_default: string;
    };
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
  width: number;
  types: Type[];
  sprites: Sprite;
  order: number;
}

export interface InitialStore {
  loading: boolean;
  selectedPokemon: Record<string, never> | Pokemon;
  pokemons: [] | Pokemon[];
}

export interface Action<P> {
  type: string;
  payload: P;
}

export type Actions = Action<Pokemon> | Action<Pokemon[]> | Action<boolean>;
