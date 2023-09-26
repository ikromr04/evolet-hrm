import styled from 'styled-components';

export const StyledAvatar = styled.img`
  display: flex;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  min-width: 144px;
`;

export const Label = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);
  min-width: max-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #1d1d1d;
  color: white;
  font-size: 11px;
  opacity: 0;
  visibility: hidden;
  transition: .3s;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    z-index: 1;
    width: 8px;
    height: 8px;
    background-color: #1d1d1d;
    transform: translateX(-50%) rotate(45deg);
  }

  ${StyledAvatar}:hover+& {
    opacity: 1;
    visibility: visible;
  }
`;
