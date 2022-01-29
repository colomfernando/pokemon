import React, { useEffect } from 'react';
import MainLayout from 'layout/MainLayout';
import Body from 'components/Body';
import useStore from 'store/pokemons';
import useGetListPokemon from 'hooks/useGetListPokemons';
import { setPokemons } from 'store/pokemons/actions';

const Home: React.FC = () => {
  const [, dispatch] = useStore();
  const { data } = useGetListPokemon();

  //todo agregar skeleton con el loading

  useEffect(() => {
    if (data) dispatch(setPokemons(data.results));
  }, [data]);
  return (
    <MainLayout>
      <Body />
    </MainLayout>
  );
};

export default Home;