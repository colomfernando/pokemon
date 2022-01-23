import useSWR from 'swr';
import { Pokemon } from 'types';
import fetcherPokemons from './fetcherPokemons';

interface Response {
  data: Pokemon[] | [] | undefined;
  error: Error;
  isLoading: boolean;
}

const usePokemons = (searchValues: string[]): Response => {
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon', () =>
    fetcherPokemons(searchValues)
  );

  return { data, error, isLoading: !error && !data };
};

export default usePokemons;
