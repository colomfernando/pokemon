import React from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';

const Header: React.FC = ({ ...props }) => {
  return (
    <Styles.Header {...props}>
      <InputSearch value="pokemon" />
    </Styles.Header>
  );
};

export default Header;
