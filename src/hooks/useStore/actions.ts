import types from './types';
import { Action, Pokemon } from 'types';

export const setLoading = (bool: boolean): Action<boolean> => ({
  type: types.SET_LOADING,
  payload: bool,
});

export const setPokemons = (pokemons: Pokemon[]): Action<Pokemon[]> => ({
  type: types.SET_RESULTS,
  payload: pokemons,
});

export const setSelectedPokemons = (pokemon: Pokemon): Action<Pokemon> => ({
  type: types.SET_SELECTED_POKEMON,
  payload: pokemon,
});
