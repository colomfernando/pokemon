import React from 'react';
import Styles from './styles';

interface PropsPokemonId {
  id: number;
}
const PokemonId: React.FC<PropsPokemonId> = ({ id, ...props }) => {
  return <Styles.Id {...props}>{`#${id}`}</Styles.Id>;
};

export default PokemonId;
