import React from 'react';
import Styles from './styles';
import { ResultPokemon } from 'types';

const PokemonCard: React.FC<ResultPokemon> = ({ name, id }) => {
  return (
    <Styles.Pokemon>
      <Styles.WrapperImage>
        <Styles.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={`${name}-image`}
        />
      </Styles.WrapperImage>
      <Styles.WrapperInfo>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Name>{id}</Styles.Name>
      </Styles.WrapperInfo>
    </Styles.Pokemon>
  );
};

export default PokemonCard;
