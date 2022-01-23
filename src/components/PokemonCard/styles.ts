import styled from 'styled-components';

const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const Name = styled.p`
  margin: 20px 0;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
`;

export default { Pokemon, Image, Name };
