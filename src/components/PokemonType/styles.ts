import styled from 'styled-components';

interface ColorMap {
  [name: string]: {
    color: string;
    contrastText: string;
  };
}

interface PropType {
  name: keyof ColorMap;
}

const colorMap: ColorMap = {
  electric: {
    color: '#FFF01F ',
    contrastText: '#000',
  },
  steel: {
    color: '#43464B',
    contrastText: '#fff',
  },
  poison: {
    color: '#ee214a',
    contrastText: '#fff',
  },
  fire: {
    color: '#e25822',
    contrastText: '#fff',
  },
  ground: {
    color: '#9b7653',
    contrastText: '#fff',
  },
  grass: {
    color: '#348C31',
    contrastText: '#fff',
  },
  psychic: {
    color: '#615981',
    contrastText: '#fff',
  },
  rock: {
    color: '#808487',
    contrastText: '#fff',
  },
  fighting: {
    color: '#96b8d6',
    contrastText: '#fff',
  },
  water: {
    color: '#d4f1f9 ',
    contrastText: '#000',
  },
  ice: {
    color: '#20c3d0 ',
    contrastText: '#000',
  },
  ghost: {
    color: '#CBD2D9 ',
    contrastText: '#000',
  },
  normal: {
    color: '#800080 ',
    contrastText: '#fff',
  },
};

const Type = styled.span<PropType>`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ name }) =>
    colorMap[name] ? colorMap[name].color : 'black'};
  color: ${({ name }) =>
    colorMap[name] ? colorMap[name].contrastText : 'white'};
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export default { Type };
