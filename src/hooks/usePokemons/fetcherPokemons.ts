import { Pokemon } from 'types';

type searchValues = string[];

const URL = 'https://pokeapi.co/api/v2/pokemon';

const fetcherPokemons = async (
  searchValues: searchValues
): Promise<Pokemon[] | []> => {
  try {
    const results = searchValues.reduce(
      async (prevPromise: Promise<Pokemon[] | []>, value) => {
        const accum = await prevPromise;

        const actual = await fetch(`${URL}/${value}`).then((res) => res.json());

        return [...accum, actual];
      },
      Promise.resolve([])
    );

    return results;
  } catch (error) {
    return [];
  }
};

export default fetcherPokemons;
