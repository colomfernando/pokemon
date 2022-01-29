import React from 'react';
import MainLayout from 'layout/MainLayout';
import Styles from './styles';

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <Styles.Wrapper>
        <Styles.WrapperImg>
          <Styles.Number>4</Styles.Number>
          <Styles.Image src="/assets/pokeball.png" alt="pokeball-img" />
          <Styles.Number>4</Styles.Number>
        </Styles.WrapperImg>
        <Styles.Message>Pokemon not found</Styles.Message>
        <Styles.GoHome to="/">Find another</Styles.GoHome>
      </Styles.Wrapper>
    </MainLayout>
  );
};

export default NotFound;
