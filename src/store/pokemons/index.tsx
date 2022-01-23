import React, { createContext, useContext, useReducer } from 'react';
import { Actions, InitialStore } from 'types';
import reducer from './reducer';

export const initialStore = {
  loading: false,
  selectedPokemon: {},
  pokemons: [],
};

const Context = createContext<[InitialStore, React.Dispatch<Actions>]>([
  initialStore,
  () => null,
]);

const useStore = (): [InitialStore, React.Dispatch<Actions>] => {
  const state = useContext(Context);
  return state;
};

export const PokemonProvider: React.FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialStore);
  return (
    <Context.Provider value={[store, dispatch]}>{children}</Context.Provider>
  );
};

export default useStore;
