import React from 'react';
import Styles from './styles';
import { Pokemon } from 'types';
import PokemonName from 'components/PokemonName';
import PokemonId from 'components/PokemonId';

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
      <Styles.WrapperInfo>
        <PokemonName name={name} />
        <PokemonId id={id} />
      </Styles.WrapperInfo>
      <Styles.Image src={front_default} alt={name} />
    </Styles.Wrapper>
  );
};

export default PokemonInfo;
