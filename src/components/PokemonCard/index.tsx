import React from 'react';
import Styles from './styles';
import { Pokemon } from 'types';

const PokemonCard: React.FC<Pokemon> = ({ name, sprites }) => {
  const {
    other: {
      home: { front_default },
    },
  } = sprites;
  return (
    <Styles.Pokemon>
      <Styles.Image src={front_default} alt={`${name}-image`} />
      <Styles.Name>{name}</Styles.Name>
    </Styles.Pokemon>
  );
};

export default PokemonCard;
