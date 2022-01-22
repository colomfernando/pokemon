import React, { createContext, useReducer } from 'react';
import { InitialState } from './types';

const initialState: InitialState = {
  selectedPokemon: {},
  results: [],
};

const PokemonContext = createContext(initialState);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 't':
      return state;

    default:
      return state;
  }
};

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default ContextProvider;
