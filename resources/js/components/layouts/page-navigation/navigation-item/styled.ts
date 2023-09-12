import { styled } from 'styled-components';
import CaretIcon from '../../../icons/caret-icon';
import { StyledBlock } from '../../../ui/block/styled';
import { Link } from 'react-router-dom';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['isCurrent'].includes(prop)
})<{ isCurrent?: boolean }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 16px;
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

  ${({ theme, isCurrent }) => isCurrent && `
    color: ${theme.color.button.success};
    background-color: #f1f5f8;
  `}

  &:hover {
    background-color: #f1f5f8;
  }
`;

export const Label = styled('span').withConfig({
  shouldForwardProp: (prop) => !['isCurrent'].includes(prop)
})<{ isCurrent?: boolean }>`
  transition: .3s;
  flex-grow: 1;
  text-align: left;

  ${({ theme, isCurrent }) => isCurrent && `
    color: ${theme.color.text.dark};
  `}
`;

export const MoreIcon = styled(CaretIcon)`
  transform: rotate(-90deg);
`;

export const Links = styled(StyledBlock)`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: calc(100% + 4px);
  min-width: 160px;
  transition: .3s;
  visibility: hidden;
  opacity: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;

  &:hover ${Links} {
    visibility: visible;
    opacity: 1;
  }
`;

export const LinksItem = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.text.gray };
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
