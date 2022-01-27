import { Pokemon } from 'types';

type Value = string;

const URL = 'https://pokeapi.co/api/v2/pokemon';

const fetcherGetInfoPokemon = async (
  value: Value
): Promise<Pokemon | undefined> => {
  const results = await fetch(`${URL}/${value}`).then((res) => res.json());
  console.log('results.ok :>> ', results);
  if (!results) throw new Error('error in api');

  return results;
};

export default fetcherGetInfoPokemon;
