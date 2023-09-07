import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled('label').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isHidden'].includes(prop)
})<{ isHidden?: boolean }>`
  display: flex;
  margin-bottom: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.text.dark };

  ${({ isHidden }) =>
    isHidden && `
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    `
  }
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #E5ECF3;
  background-color: #F6F9FB;
  min-height: 35px;
  padding: 4px 16px;
  transition: .3s;

  &:hover{
    outline: none;
    border: 1px solid #D3DFEB;
    background-color: #EDF2F7;
  }

  &:focus {
    outline: none;
    background-color: #F6F9FB;
    border: 1px solid #0085ff;
    box-shadow: none;
  }
`;
