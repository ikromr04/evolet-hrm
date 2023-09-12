import { styled } from 'styled-components';
import MainLogo from '../../ui/main-logo/main-logo';
import TextField from '../../ui/text-field/text-field';
import Title from '../../ui/title/title';
import { StyledBlock } from '../../ui/block/styled';
import { StyledText } from '../../ui/text/styled';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

export const LoginForm = styled(StyledBlock)`
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 1px 4px rgba(9,8,61,0.08);
  padding: 16px 32px;
`;

export const Logo = styled(MainLogo)`
  margin-bottom: 24px;
`;

export const PageTitle = styled(Title)`
  font-size: 16px;
  margin-bottom: 32px;
`;

export const Description = styled(StyledText)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Field = styled(TextField)`
  margin-bottom: 16px;
`;
