import styled from 'styled-components';
import { StyledButton } from '../../../../ui/button/styled';

export const EditButton = styled(StyledButton)`
  margin-left: auto;
`;

export const Dl = styled.dl`
  margin: 0;
  padding: 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px 40px;
  font-size: 14px;
  color: #1d1d1d;
  `;

export const Dt = styled.dt`
  color: #6c86ab;
  font-weight: 500;
`;

export const Dd = styled.dd`
  margin: 0;
`;
