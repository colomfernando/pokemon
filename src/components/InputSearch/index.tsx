import React from 'react';
import Styles from './styles';

interface PropsInputSearch {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch: React.FC<PropsInputSearch> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Styles.Input value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default InputSearch;
