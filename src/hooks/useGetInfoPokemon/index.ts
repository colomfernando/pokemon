import useSWR from 'swr';
import { Pokemon } from 'types';
import fetcherGetInfoPokemon from './fetcherPokemons';

interface Response {
  data: Pokemon | undefined;
  error: Error;
  isLoading: boolean;
}

const useGetInfoPokemon = (searchValue: string): Response => {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon', () =>
    fetcherGetInfoPokemon(searchValue)
  );

  return { data, error, isLoading: !error && !data };
};

export default useGetInfoPokemon;
