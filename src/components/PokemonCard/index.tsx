import React from 'react';
import Styles from './styles';
import { ResultPokemon } from 'types';

const getIdFromUrl = (url: string) => {
  if (!url) return '';

  const splitUrl = url.split('/').filter(Boolean);
  const id = splitUrl.pop();
  return id;
};

const PokemonCard: React.FC<ResultPokemon> = ({ name, url }) => {
  const id = getIdFromUrl(url);

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
        <Styles.Id>{`#${id}`}</Styles.Id>
      </Styles.WrapperInfo>
    </Styles.Pokemon>
  );
};

export default PokemonCard;
