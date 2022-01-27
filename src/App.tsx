import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from 'store/pokemons';
import Home from 'pages/Home';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    </PokemonProvider>
  );
};

export default App;
