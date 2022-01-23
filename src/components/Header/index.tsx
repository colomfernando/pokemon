import React, { useState } from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Header: React.FC = ({ ...props }) => {
  const [value, setValue] = useState('');
  const { data } = useSWR('https://pokeapi.co/api/v2/pokemon/1', fetcher);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  console.log('data :>> ', data);
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
