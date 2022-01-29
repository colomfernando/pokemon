import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonProvider } from 'store/pokemons';
import Home from 'pages/Home';
import Pokemon from 'pages/Pokemon';
import NotFound from 'pages/NotFound';

// todo agregar pagina not matching
const App: React.FC = () => {
  return (
    <PokemonProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </PokemonProvider>
  );
};

export default App;
