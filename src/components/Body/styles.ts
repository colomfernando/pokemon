import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

export default { Body, List };
