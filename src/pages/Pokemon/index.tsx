import React from 'react';
import MainLayout from 'layout/MainLayout';
import { useParams } from 'react-router-dom';
import useGetInfoPokemon from 'hooks/useGetInfoPokemon';
import PokemonInfo from 'components/PokemonInfo';
import Styles from './styles';

const Pokemon: React.FC = () => {
  const { id } = useParams();

  if (!id) return null;

  const { data } = useGetInfoPokemon(id);

  if (!data) return null;

  return (
    <MainLayout>
      <Styles.Wrapper>
        <PokemonInfo {...data} />
      </Styles.Wrapper>
    </MainLayout>
  );
};

export default Pokemon;
