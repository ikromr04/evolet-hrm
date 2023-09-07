import styled from 'styled-components';

export const StyledText = styled.p<{ dark?: boolean }>`
  margin-top: 0;
  margin-bottom: 0;
  color: ${({ theme, dark }) => dark ? theme.color.text.dark : theme.color.text.gray };
`;
