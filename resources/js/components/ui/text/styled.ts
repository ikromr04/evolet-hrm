import styled from 'styled-components';

export const StyledText = styled('p').withConfig({
  shouldForwardProp: (prop) => !['error', 'dark'].includes(prop)
})<{ dark?: boolean, error?: boolean }>`
  margin-top: 0;
  margin-bottom: 0;
  ${({ theme, error, dark }) =>  {
    if (dark) {
      return `color: ${theme.color.text.dark}`;
    }
    if (error) {
      return `color: ${theme.color.text.error}`;
    }
    return `color: ${theme.color.text.gray}`;
  }};
`;
