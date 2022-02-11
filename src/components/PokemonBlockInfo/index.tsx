import React from 'react';
import Styles from './styles';

interface PropsPokemonBlockInfo {
  title: string;
  value: string;
}

const PokemonBlockInfo: React.FC<PropsPokemonBlockInfo> = ({
  title,
  value,
  ...props
}) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.Value>{value}</Styles.Value>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Wrapper>
  );
};

export default PokemonBlockInfo;
