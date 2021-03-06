import useSWR from 'swr';
import { ListPokemons } from 'types';

interface Response {
  data: ListPokemons;
  error: Error;
  isLoading: boolean;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useGetInfoPokemon = (): Response => {
  // TODO: agregar local storage
  // TODO: agregar validación joi schema
  const { data, error } = useSWR(
    'https://pokeapi.co/api/v2/pokemon?limit=493',
    fetcher
  );

  return { data, error, isLoading: !error && !data };
};

export default useGetInfoPokemon;
