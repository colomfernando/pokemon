import React from 'react';
import Styles from './styles';

interface PropsInputSearch {
  value: string;
}

const InputSearch: React.FC<PropsInputSearch> = ({ value }) => {
  return <Styles.Input value={value} />;
};

export default InputSearch;
