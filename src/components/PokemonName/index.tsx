import React from 'react';
import Styles from './styles';

interface PropsPokemonName {
  name: string;
}

const PokemonName: React.FC<PropsPokemonName> = ({ name }) => {
  if (!name) return null;
  return <Styles.Name>{name}</Styles.Name>;
};

export default PokemonName;
