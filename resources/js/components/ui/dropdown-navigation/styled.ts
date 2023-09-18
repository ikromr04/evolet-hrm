import styled from 'styled-components';

export const StyledNavigation = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.text.gray };
  font-size: 13px;
  transition: .3s;
  border: none;
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #e5ecf3;
  }
`;
