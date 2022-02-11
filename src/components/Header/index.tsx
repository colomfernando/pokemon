import React from 'react';
import Styles from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Styles.Header>
      <Link to="/">
        <Styles.Title>POKEDEX</Styles.Title>
      </Link>
    </Styles.Header>
  );
};

export default Header;
