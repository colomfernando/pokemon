import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90px;
  width: 100%;
  height: auto;
`;
const Number = styled.span`
  font-size: 130px;
  font-weight: 700;
`;

const Message = styled.p`
  margin-top: 30px;
  font-size: 24px;
`;

const GoHome = styled(Link)`
  font-size: 24px;
  margin-top: 30px;
  color: ${palette.secondary.main};
  font-weight: 500;
`;

export default { Wrapper, WrapperImg, Image, Number, Message, GoHome };
