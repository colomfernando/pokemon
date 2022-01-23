import React, { useState, useEffect } from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';
import usePokemons from 'hooks/usePokemons';
import useStore from 'hooks/useStore';
import { setPokemons } from 'hooks/useStore/actions';

const randomIds = Array.from({ length: 20 }, () =>
  String(Math.floor(Math.random() * 100))
);

const Header: React.FC = ({ ...props }) => {
  const [value, setValue] = useState('');
  const [, dispatch] = useStore();
  const { data } = usePokemons(randomIds);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  useEffect(() => {
    if (data && data.length) dispatch(setPokemons(data));
  }, [data]);
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
