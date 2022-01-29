import styled from 'styled-components';
import palette from 'theme/palette';

const Header = styled.header`
  width: 100%;
  padding: 20px;
  color: white;
  font-weight: 900;
  background-color: ${palette.secondary.main};
`;

const Title = styled.h2``;

export default { Header, Title };
