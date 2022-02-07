import React from 'react';
import Styles from './styles';

interface PropsStat {
  name: string;
  value: number;
}

const PokemonStat: React.FC<PropsStat> = ({ name, value }) => {
  return (
    <Styles.Wrapper>
      <Styles.Name>{`${name}:`}</Styles.Name>
      <Styles.Value>{value}</Styles.Value>
      <Styles.WrapperBar>
        <Styles.Bar progress={value} />
      </Styles.WrapperBar>
    </Styles.Wrapper>
  );
};

export default PokemonStat;
