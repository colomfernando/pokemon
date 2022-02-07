import React, { useEffect } from 'react';
import MainLayout from 'layout/MainLayout';
import useStore from 'store/pokemons';
import useGetListPokemon from 'hooks/useGetListPokemons';
import { setPokemons } from 'store/pokemons/actions';
import Styles from './styles';
import PokemonCard from 'components/PokemonCard';

const Home: React.FC = () => {
  const [store, dispatch] = useStore();
  const { data, isLoading } = useGetListPokemon();
  const { pokemons } = store;

  //TODO agregar skeleton con el loading

  useEffect(() => {
    if (data) dispatch(setPokemons(data.results));
  }, [data]);

  const fakeArr = Array.from({ length: 50 }, (_el, idx) => 1 * idx);

  const arrData = isLoading ? fakeArr : pokemons;

  return (
    <MainLayout>
      <Styles.Body>
        <Styles.List>
          {arrData.map((pokemon, idx) => (
            <PokemonCard
              isLoading={isLoading}
              key={`${idx}-pokemon}`}
              {...pokemon}
            />
          ))}
        </Styles.List>
      </Styles.Body>
    </MainLayout>
  );
};

export default Home;
