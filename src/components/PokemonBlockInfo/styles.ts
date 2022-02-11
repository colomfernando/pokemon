import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 12px;
`;

const Value = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export default { Wrapper, Title, Value };
