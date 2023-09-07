import { styled } from 'styled-components';
import { StyledBlock } from '../../ui/block/styled';
import { StyledTitle } from '../../ui/title/styled';
import MainLogo from '../../ui/main-logo/main-logo';
import Text from '../../ui/text/text';
import TextField from '../../ui/text-field/text-field';

export const Main = styled.main`
  background-image: url('/img/login-page-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
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
  border: 1px solid #dce5ef;
  border-radius: 8px;
  padding: 16px 32px;
`;

export const Logo = styled(MainLogo)`
  margin-bottom: 24px;
`;

export const PageTitle = styled(StyledTitle)`
  font-size: 16px;
  margin-bottom: 32px;
`;

export const Description = styled(Text)`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.text.dark };
`;

export const Field = styled(TextField)`
  margin-bottom: 16px;
`;
