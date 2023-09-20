import { css, styled } from 'styled-components';

export const StyledTitle = styled('h2').withConfig({
  shouldForwardProp: (props) => !['small'].includes(props),
})<{ small?: boolean }>`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.color.titleColor };
  ${({ small }) => small && css`
    font-size: 16px;
  ` }
`;
