import React, { useState } from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';

const Header: React.FC = ({ ...props }) => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  return (
    <Styles.Header {...props}>
      <InputSearch
        value={value}
        onChange={handleOnChange}
        placeholder="Search"
      />
    </Styles.Header>
  );
};

export default Header;
