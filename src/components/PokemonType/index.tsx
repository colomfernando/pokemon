import React from 'react';
import { Type } from 'types';
import Styles from './styles';

const PokemonType: React.FC<Type> = ({ type }) => {
  const { name } = type;
  return <Styles.Type type={name}>{name}</Styles.Type>;
};

export default PokemonType;
