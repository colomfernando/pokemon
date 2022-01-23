import React from 'react';
import Styles from './styles';
import InputSearch from 'components/InputSearch';
import useSWR from 'swr';

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Header: React.FC = ({ ...props }) => {
  const { data } = useSWR(
    'https://pokeapi.co/api/v2/pokemon/?limit=20',
    fetcher
  );

  console.log('data :>> ', data);
  return (
    <Styles.Header {...props}>
      <InputSearch value="pokemon" />
    </Styles.Header>
  );
};

export default Header;
