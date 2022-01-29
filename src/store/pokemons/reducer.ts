import { InitialStore, Actions, Pokemon, ResultPokemon } from 'types';
import types from './types';

const reducer = (state: InitialStore, action: Actions): InitialStore => {
  switch (action.type) {
    case types.SET_RESULTS:
      return { ...state, pokemons: action.payload as ResultPokemon[] };
    case types.SET_SELECTED_POKEMON:
      return { ...state, selectedPokemon: action.payload as Pokemon };
    default:
      return state;
  }
};

export default reducer;
