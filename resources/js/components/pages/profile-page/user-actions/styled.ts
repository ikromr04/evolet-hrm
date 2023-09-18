import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 35px;
  background-color: ${({ theme }) => theme.color.baseWhite};
  border: 1px solid #dce5ef;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  color: #476887;
  box-shadow: 0px 1px 4px rgba(9,8,61,0.08);
  transition: .3s;

  &:hover {
    background-color: #F6F9FB;
    border: 1px solid #D3DFEB;
  }
`;
