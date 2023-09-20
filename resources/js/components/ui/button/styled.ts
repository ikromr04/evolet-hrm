import styled, { css } from 'styled-components';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['fluid', 'success', 'large'].includes(prop)
})<{ fluid?: boolean, success?: boolean, large?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.color.text.gray};
  border-radius: 4px;
  font-size: 13px;
  line-height: 1;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;
  box-shadow: 0 0px 2px rgba(0,0,0,0.2);
  cursor: pointer;

  ${({ fluid }) => fluid && css`
    width: 100%;
  `}
  ${({ success }) => success && css`
    background-color: #00b950;
    color: white;
  `}

  ${({ large }) => large && css`
    padding: 10px 16px;
    font-size: 14px;
  `}

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
