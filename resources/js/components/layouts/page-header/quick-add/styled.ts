import styled from 'styled-components';

export const Wrapper = styled('div')`
  position: relative;
  z-index: 1;
`;

export const StyledButton = styled('span')`
  border: none;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #E5ECF3;
  font-weight: 600;
  font-size: 12px;
  min-height: 24px;
  color: #476887;
  cursor: pointer;
  border-radius: 6px;
  transition: .3s;

  &:hover {
    background-color: #DCE5EF;
  }
`;
