import React, { useState } from 'react';
import Styles from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const getIdFromUrl = (url: string) => {
  if (!url) return '';

  const splitUrl = url.split('/').filter(Boolean);
  const id = splitUrl.pop();
  return id;
};

interface PropPokemonCard {
  url?: string;
  name?: string;
  isLoading?: boolean;
}

const PokemonCard: React.FC<PropPokemonCard> = ({
  name = '',
  url = '',
  isLoading = false,
}) => {
  const id = getIdFromUrl(url);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleOnload = () => {
    setImgLoaded(true);
  };

  // todo componente Image con onError y onLoad
  return (
    <Styles.LinkTo to={!imgLoaded ? '#' : `/pokemon/${id}`} key={id}>
      <Styles.Pokemon>
        <Styles.WrapperImage isLoading={isLoading}>
          {!isLoading && id ? (
            <Styles.Image
              onLoad={handleOnload}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
              alt={`${name}-image`}
            />
          ) : (
            <Skeleton height={135} />
          )}
        </Styles.WrapperImage>
        <Styles.WrapperInfo>
          <Styles.Name>{!isLoading ? name : <Skeleton />}</Styles.Name>
          <Styles.Id>{!isLoading ? `#${id}` : <Skeleton />}</Styles.Id>
        </Styles.WrapperInfo>
      </Styles.Pokemon>
    </Styles.LinkTo>
  );
};

export default PokemonCard;
