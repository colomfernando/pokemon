import styled from 'styled-components';
import palette from 'theme/palette';

const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background: ${palette.primary.main};
  border-radius: 8px;
`;

const Name = styled.p`
  margin: 20px 0;
  font-weight: 600;
  text-transform: capitalize;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
`;

const Size = styled.span`
  margin: 5px 0;
`;

export default { Pokemon, Image, Name, Size };
