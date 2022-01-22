export interface Species {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
}

export interface Abilities {
  ability: Ability;
}

export interface Pokemon {
  name: string;
  weight: number;
  height: number;
  species: Species;
  abilities: Abilities[];
}

export interface InitialState {
  selectedPokemon: Record<string, unknown> | Pokemon;
  results: [] | Pokemon[];
}

export type Type = string;

export interface Action<Payload> {
  type: Type;
  payload: Payload;
}
