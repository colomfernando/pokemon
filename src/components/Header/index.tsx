import React from 'react';
import Styles from './styles';

// TODO agregar link a home en el texto
const Header: React.FC = () => {
  return (
    <Styles.Header>
      <Styles.Title>POKEDEX</Styles.Title>
    </Styles.Header>
  );
};

export default Header;
