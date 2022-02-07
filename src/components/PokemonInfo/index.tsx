import React from 'react';
import Styles from './styles';
import { Pokemon } from 'types';
import PokemonName from 'components/PokemonName';
import PokemonId from 'components/PokemonId';
import PokemonType from 'components/PokemonType';
import PokemonStat from 'components/PokemonStat';

const PokemonInfo: React.FC<Pokemon> = ({
  name,
  id,
  types,
  sprites,
  stats,
  ...props
}) => {
  console.log('props :>> ', props);
  const [firstType] = types;
  const {
    other: {
      home: { front_default },
    },
  } = sprites;
  const { type } = firstType;

  //TODO obtener evoluciones en https://pokeapi.co/api/v2/evolution-chain/1/

  const getStats = stats.map((item) => {
    const { stat } = item;
    return { value: item.base_stat, name: stat.name };
  });

  return (
    <Styles.Wrapper type={type.name || 'white'}>
      <Styles.WrapperBaseInfo>
        <PokemonName name={name} />
        <PokemonId id={id} />
      </Styles.WrapperBaseInfo>
      <Styles.Image src={front_default} alt={name} />
      <Styles.WrapperInfo>
        {!!types.length && (
          <Styles.WrapperTypes>
            {types.map((item, idx) => (
              <PokemonType key={idx.toString()} {...item} />
            ))}
          </Styles.WrapperTypes>
        )}
        {!!getStats.length &&
          getStats.map((item, idx) => (
            <PokemonStat key={`${idx}-${item.name}`} {...item} />
          ))}
      </Styles.WrapperInfo>
    </Styles.Wrapper>
  );
};

export default PokemonInfo;
