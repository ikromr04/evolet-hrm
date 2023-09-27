import styled from 'styled-components';

export const Wrapper = styled('div')`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled('button')`
  display: inline-block;
  padding: 0;
  transition: .3s;
  border: none;
  background-color: transparent;
  color: #b5c3cf;
  cursor: pointer;

  &:hover {
    color: #91a4b7;
  }
`;
