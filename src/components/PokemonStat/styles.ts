import styled from 'styled-components';
import palette from 'theme/palette';

type PropsBar = {
  progress: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 20px 0;
`;

const Name = styled.p`
  font-weight: 700;
  flex-basis: 65%;
  font-size: 16px;
  margin-right: 12px;
  text-transform: uppercase;
  position: relative;
  color: ${palette.primary.main};
`;

const Value = styled.p`
  color: ${palette.primary.main};
  font-weight: 700;
  font-size: 18px;
  margin-right: 20px;
`;

const WrapperBar = styled.div`
  display: flex;
  width: 100%;
  height: 18px;
  border-radius: 10px;
  background-color: ${palette.common.grey};
`;

const Bar = styled.div<PropsBar>`
  width: ${({ progress }) => (progress ? `${progress}%` : 0)};
  background-color: ${palette.primary.main};
  border-radius: inherit;
`;

export default { Wrapper, Name, Value, WrapperBar, Bar };
