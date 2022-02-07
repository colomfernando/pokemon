import styled from 'styled-components';
import colorType from 'theme/colorTypes';
import palette from 'theme/palette';
import { ColorType } from 'types';

interface PropType {
  type: keyof ColorType;
}

const Wrapper = styled.div<PropType>`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ type }) =>
    colorType[type] ? colorType[type].color : 'black'};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 40px 0;
`;

const WrapperBaseInfo = styled.div`
  padding: 40px 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperInfo = styled.div`
  background-color: ${palette.common.white};
  padding: 30px;
`;

const Image = styled.img`
  width: 280px;
  padding-bottom: 20px;
  height: auto;
  margin: 0 auto;
`;

const WrapperTypes = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export default { Wrapper, WrapperBaseInfo, WrapperInfo, Image, WrapperTypes };
