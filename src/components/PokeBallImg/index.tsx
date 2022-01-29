import React from 'react';
import Styles from './styles';

const PokeBallImg: React.FC = () => {
  return (
    <Styles.Wrapper>
      <Styles.Image src="/assets/pokeball.png" alt="pokeball-img" />
    </Styles.Wrapper>
  );
};

export default PokeBallImg;
