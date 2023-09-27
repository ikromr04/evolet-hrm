import { css, styled } from 'styled-components';
import CaretIcon from '../../../icons/caret-icon';
import { Link } from 'react-router-dom';
import Box from '../../../ui/box/box';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['isCurrent'].includes(prop)
})<{ isCurrent?: boolean }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 8px 12px;
  min-height: 36px;
  margin: 1px 8px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #6c86ab;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: .3s;

  ${({ isCurrent }) => isCurrent && css`
    color: #66bb6a;
    background-color: #f1f5f8;
  `}

  &:hover {
    background-color: #f1f5f8;
  }
`;

export const ButtonTitle = styled('span')`
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  background-color: #1d1d1d;
  color: white;
  padding: 6px 8px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  min-width: max-content;
  opacity: 0;
  visibility: hidden;
  transition: .3s;

  &::before {
    content: "";
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: #1d1d1d;
  }
`;

export const Label = styled('span').withConfig({
  shouldForwardProp: (prop) => !['isCurrent', 'isCollapsed'].includes(prop)
})<{ isCurrent?: boolean, isCollapsed?: boolean }>`
  transition: .3s;
  flex-grow: 1;
  text-align: left;
  max-width: 200px;
  padding: 0 16px;
  opacity: 1;
  visibility: visible;
  overflow: hidden;
  white-space: nowrap;
  transition: .3s;

  ${({ isCurrent }) => isCurrent && css`
    color: #000f30;
  `}

  ${({ isCollapsed }) => isCollapsed && css`
    max-width: 0;
    padding: 0;
    opacity: 0;
    visibility: hidden;
  `}
`;

export const MoreIcon = styled(CaretIcon).withConfig({
  shouldForwardProp: (prop) => ![ 'isCollapsed'].includes(prop)
})<{ isCollapsed?: boolean }>`
  transform: rotate(-90deg);
  margin-right: 0;
  transition: .3s;

  ${({ isCollapsed }) => isCollapsed && css`
    margin-right: -16px;
  `}
`;

export const Links = styled(Box)`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: calc(100% + 1px);
  min-width: 160px;
  transition: .3s;
  visibility: hidden;
  opacity: 0;
`;

export const LinksTitle = styled('span')`
  font-size: 10px;
  font-weight: 500;
  color: #91a4b7;
  padding: 8px 16px;
`;

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: (prop) => !['isCollapsed'].includes(prop),
})<{ isCollapsed?: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;

  &:hover ${Links} {
    visibility: visible;
    opacity: 1;
  }

  ${({ isCollapsed }) => isCollapsed && css`
    &:hover ${ButtonTitle} {
      visibility: visible;
      opacity: 1;
    }
  `}
`;

export const LinksItem = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 8px 16px;
  color: #476887;
  font-size: 13px;
  transition: .3s;
  border: none;
  min-width: max-content;
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #e5ecf3;
  }
`;
