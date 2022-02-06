import React from 'react';
import Styles from './styles';
import { Pokemon } from 'types';
import PokemonName from 'components/PokemonName';
import PokemonId from 'components/PokemonId';
import PokemonType from 'components/PokemonType';

const PokemonInfo: React.FC<Pokemon> = ({
  name,
  id,
  types,
  sprites,
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

  return (
    <Styles.Wrapper type={type.name || 'white'}>
      <Styles.WrapperBaseInfo>
        <PokemonName name={name} />
        <PokemonId id={id} />
      </Styles.WrapperBaseInfo>
      <Styles.Image src={front_default} alt={name} />
      <Styles.WrapperInfo>
        {types.map((item, idx) => (
          <PokemonType key={idx.toString()} {...item} />
        ))}
      </Styles.WrapperInfo>
    </Styles.Wrapper>
  );
};

export default PokemonInfo;
