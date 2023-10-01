import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLogo = styled(Link).withConfig({
  shouldForwardProp: (props) => !['inactive'].includes(props),
})<{ inactive: boolean }>`
  display: flex;
  max-width: max-content;

  ${({ inactive }) => inactive && css`
    pointer-events: none;
  `}
`;
