import React from 'react';
import Styles from './styles';
import { Pokemon } from 'types';

const PokemonCard: React.FC<Pokemon> = ({ name, sprites, height, weight }) => {
  const {
    other: {
      home: { front_default },
    },
  } = sprites;
  return (
    <Styles.Pokemon>
      <Styles.WrapperImage>
        <Styles.Image src={front_default} alt={`${name}-image`} />
      </Styles.WrapperImage>
      <Styles.WrapperInfo>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Size>{`Height: ${height / 10}m`}</Styles.Size>
        <Styles.Size>{`Weight: ${weight / 10}kg`}</Styles.Size>
      </Styles.WrapperInfo>
    </Styles.Pokemon>
  );
};

export default PokemonCard;
