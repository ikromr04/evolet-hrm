import styled from 'styled-components';

export const StyledButton = styled.button<{ fluid?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 35px;
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme.color.button.success};
  background-color: ${({ theme }) => theme.color.button.success};
  color: ${({ theme }) => theme.color.baseWhite};
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;

  ${({ fluid }) => fluid && 'width: 100%;'}

  &:hover {
    background-color: ${({ theme }) => `${theme.color.button.success}8d`};
  }
`;
