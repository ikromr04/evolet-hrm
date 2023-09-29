import { css, styled } from 'styled-components';
import Box from '../../ui/box/box';
import { Link } from 'react-router-dom';


export const StyledBox = styled(Box).withConfig({
  shouldForwardProp: (props) => !['isCollapsed'].includes(props),
})<{ isCollapsed: boolean }>`
  position: sticky;
  top: 65px;
  padding: 8px 0;
  z-index: 1;
  transition: .3s;

  ${({ isCollapsed }) => isCollapsed && css`
    ${NavigationLink} {
      max-width: 32px;
      color: transparent;

      &:hover::before,
      &:hover::after {
        visibility: visible;
        opacity: 1;
      }

      svg {
        color: #6c86ab;
      }
    }

    ${ToggleButton} {
      max-width: 32px;
      color: transparent;

      svg {
        color: #6c86ab;
        transform: scale(-1);
      }
    }
  `}
`;

export const NavigationLink = styled(Link).withConfig({
  shouldForwardProp: (props) => !['isCurrent'].includes(props),
})<{ isCurrent: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 200px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;
  color: #6c86ab;
  text-decoration: none;
  font-size: 14px;
  margin: 2px 8px;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  transition: .3s;

  ${({ isCurrent }) => isCurrent && css`
    color: #476887;
    background-color: #f1f5f8;

    svg {
      color: #66bb6a !important;
    }
  `}

  &>svg {
    display: block;
    min-width: 16px;
    transition: .3s;
  }

  &:hover {
    background-color: #f1f5f8;
  }

  &::before {
    content: "";
    position: absolute;
    left: calc(100% + 12px);
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #252525 0 50.1%, transparent 50.1% 100%);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s
  }

  &::after {
    content: attr(data-title);
    position: absolute;
    left: calc(100% + 16px);
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    padding: 4px 8px;
    font-weight: 400;
    border-radius: 4px;
    font-size: 13px;
    background-color: #252525;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s
  }
`;

export const ToggleButton = styled('button')`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% - 16px);
  max-width: 200px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;
  color: #6c86ab;
  border: none;
  background-color: transparent;
  font-size: 14px;
  margin: 2px 8px;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;

  &>svg {
    display: block;
    min-width: 16px;
    transition: .3s;
  }

  &:hover {
    background-color: #f1f5f8;
  }
`;
