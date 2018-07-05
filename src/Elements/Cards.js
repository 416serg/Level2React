import styled from 'styled-components';
import { elevation, transition, colors } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  color: ${colors.black};
  ${transition({
    property: 'box-shadow',
  })};
  ${props => elevation[props.elevation]};
  &:hover {
    ${props => elevation[props.elevation + 1]};
  }
`;
