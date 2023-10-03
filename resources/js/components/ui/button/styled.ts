import styled, { css } from 'styled-components';
import { StyledInfo } from '../info/styled';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (props) => !['success', 'warning', 'error', 'large'].includes(props),
})<{ success?: boolean, warning?: boolean, error?: boolean, large?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border: none;
  background-color: white;
  color: #476887;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0px 2px rgba(0,0,0,0.2);
  transition: 0.3s;
  min-height: 32px;
  max-height: 32px;
  cursor: pointer;

  ${({ success }) => success && css`
    background-color: #66bb6a;
    color: white;
  `}

  ${({ warning }) => warning && css`
    background-color: #ffb74d;
    color: white;
  `}

  ${({ error }) => error && css`
    background-color: #ff5d5d;
    color: white;
  `}

  ${({ large }) => large && css`
    font-size: 14px;
    min-height: 36px;
    max-height: 36px;
  `}

  &:active,
  &:hover {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`;
