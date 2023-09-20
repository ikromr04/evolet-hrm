import { styled } from 'styled-components'

export const StyledBlock = styled.div`
  background-color: ${({ theme }) => theme.color.baseWhite};
  border: 1px solid #dce5ef;
  border-radius: 8px;
  box-shadow: 0 0px 4px rgba(0,0,0,0.05);
`;
