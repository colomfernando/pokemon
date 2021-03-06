import styled, { css } from 'styled-components';
import palette from 'theme/palette';
import { Link } from 'react-router-dom';

const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background: ${palette.common.white};
  border-radius: 8px;
  padding-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const Name = styled.p`
  margin: 10px 0;
  width: 100%;
  max-width: 200px;
  text-align: center;
  font-weight: 700;
  text-transform: capitalize;
`;

const Id = styled.span`
  font-weight: 500;
  width: 100%;
  text-align: center;
  max-width: 40px;
`;

type PropsWrapperImage = { isLoading: boolean };

const WrapperImage = styled.div<PropsWrapperImage>`
  background-color: ${({ isLoading }) =>
    isLoading ? 'initial' : palette.primary.main};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px;
  width: 100%;
  max-width: 267px;
  height: 140px;
  ${({ isLoading }) =>
    !isLoading &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

const WrapperInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
`;

const LinkTo = styled(Link)``;

export default {
  Pokemon,
  WrapperImage,
  WrapperInfo,
  Image,
  Name,
  Id,
  LinkTo,
};
