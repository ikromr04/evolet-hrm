import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  border: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

export const StyledAvatar = styled.img`
  display: block;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

export const Label = styled.span`
  position: absolute;
  top: calc(100% + 8px);
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
    top: -4px;
    left: 50%;
    z-index: 1;
    width: 8px;
    height: 8px;
    background-color: #1d1d1d;
    transform: translateX(-50%) rotate(45deg);
  }

  ${Wrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
