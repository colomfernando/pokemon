import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Body from 'components/Body';
import { PokemonProvider } from 'store/pokemons';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <>
        <GlobalStyles />
        <Header />
        <Body />
      </>
    </PokemonProvider>
  );
};

export default App;
