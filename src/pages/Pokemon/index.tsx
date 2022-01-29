import React from 'react';
import MainLayout from 'layout/MainLayout';
import { useParams } from 'react-router-dom';
import useGetInfoPokemon from 'hooks/useGetInfoPokemon';

const Pokemon: React.FC = () => {
  const { id } = useParams();

  if (!id) return null;

  const { data } = useGetInfoPokemon(id);

  console.log('data :>> ', data);
  return (
    <MainLayout>
      <div>pokemon </div>
    </MainLayout>
  );
};

export default Pokemon;
