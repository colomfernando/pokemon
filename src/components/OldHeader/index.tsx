import React, { useState, useEffect } from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';
import useStore from 'store/pokemons';
import usePokemons from 'hooks/usePokemons';
import { setPokemons } from 'store/pokemons/actions';

const randomIds = Array.from({ length: 30 }, () =>
  String(Math.floor(Math.random() * 100) + 1)
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
