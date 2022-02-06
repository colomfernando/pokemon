import styled from 'styled-components';
import colorType from 'theme/colorTypes';
import { ColorType } from 'types';

interface PropType {
  type: keyof ColorType;
}

const Type = styled.span<PropType>`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ type }) =>
    colorType[type] ? colorType[type].color : 'black'};
  color: ${({ type }) =>
    colorType[type] ? colorType[type].contrastText : 'white'};
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export default { Type };
