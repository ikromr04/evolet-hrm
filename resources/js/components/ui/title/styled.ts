import { css, styled } from 'styled-components';

export const StyledTitle = styled('h2').withConfig({
  shouldForwardProp: (props) => !['small', 'large'].includes(props),
})<{ small?: boolean, large?: boolean }>`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #000f30;

  ${({ small }) => small && css`
    font-size: 16px;
  ` }

  ${({ large }) => large && css`
    font-size: 24px;
  ` }
`;
