import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 90%;
  max-width: ${({ theme }) => theme.media.extraExtraLarge};
  margin: 0 auto;
`;
