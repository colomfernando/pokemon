import React from 'react';
import Styles from './styles';

const Header: React.FC = ({ children, ...props }) => {
  return <Styles.Header {...props}>{children}</Styles.Header>;
};

export default Header;
