import styled from 'styled-components';
import { StyledContainer } from '../../ui/container/styled';
import { StyledTitle } from '../../ui/title/styled';
import { StyledText } from '../../ui/text/styled';

export const Main = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  max-width: 880px;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 24px;
`;

export const PageTitle = styled(StyledTitle)`
  margin-bottom: 16px;
`;

export const Description = styled(StyledText)`
  margin-bottom: 24px;
`;
