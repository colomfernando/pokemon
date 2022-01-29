import types from './types';
import { Action, Pokemon, ResultPokemon } from 'types';

export const setPokemons = (
  pokemons: ResultPokemon[]
): Action<ResultPokemon[]> => ({
  type: types.SET_RESULTS,
  payload: pokemons,
});

export const setSelectedPokemons = (pokemon: Pokemon): Action<Pokemon> => ({
  type: types.SET_SELECTED_POKEMON,
  payload: pokemon,
});
