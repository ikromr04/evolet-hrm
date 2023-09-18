import { styled } from 'styled-components';
import Block from '../../../../ui/block/block';

export const StyledNavigation = styled(Block)`
  position: absolute;
  right: 0;
  top: calc(100% + 24px);
  padding: 8px 0;
  min-width: max-content;
`;

export const NavigationItem = styled.button`
  display: flex;
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

export const Hr = styled.div`
  background-color: #d2d2d2;
  height: 1px;
  margin: 8px 0;
`;
