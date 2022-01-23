import React from 'react';
import Styles from './styles';
import useStore from 'store/pokemons';
import PokemonCard from 'components/PokemonCard';

const Body: React.FC = () => {
  const [store] = useStore();
  const { pokemons } = store;
  return (
    <Styles.Body>
      <Styles.List>
        {pokemons &&
          pokemons.length &&
          pokemons.map((pokemon) => (
            <PokemonCard key={`${pokemon.id}-${pokemon.name}`} {...pokemon} />
          ))}
      </Styles.List>
    </Styles.Body>
  );
};

export default Body;
