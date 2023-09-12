import { styled } from 'styled-components';
import { StyledBlock } from '../../ui/block/styled';
import { MoreIcon } from './navigation-item/styled';

export const Navigation = styled(StyledBlock).withConfig({
  shouldForwardProp: (prop) => !['isCollapsed'].includes(prop),
})<{ isCollapsed: boolean }>`
  padding: 16px 0;
  z-index: 1;

  ${({ isCollapsed }) => isCollapsed && `
    & span {
      display: none;
    }

    & ${MoreIcon} {
      position: absolute;
      right: 6px;
    }
  `}
`;

export const Hr = styled.div`
  background-color: #d2d2d2;
  height: 1px;
  margin: 8px 0;
`;

