import React, { useReducer } from 'react';
import { InitialStore, Actions } from 'types';
import reducer from './reducer';

const initialStore = {
  loading: false,
  selectedPokemon: {},
  pokemons: [],
};
const useStore = (): [InitialStore, React.Dispatch<Actions>] => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return [store, dispatch];
};

export default useStore;
