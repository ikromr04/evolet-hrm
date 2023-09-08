import styled from 'styled-components';

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: (prop) => !['width'].includes(prop)
})<{ width?: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ? `${width}px` : '100%'};
`;

export const Label = styled('label').withConfig({
  shouldForwardProp: (prop) => !['isHidden'].includes(prop)
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

export const Input = styled('input').withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop)
})<{ error?: boolean }>`
  display: flex;
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #E5ECF3;
  background-color: #F6F9FB;
  min-height: 35px;
  padding: 4px 16px;
  transition: .3s;
  ${({ error }) => error && 'border: 1px solid #ff623f;' };

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

export const Message = styled('span').withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop)
})<{ error?: boolean }>`
  display: flex;
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
  color: ${({ error }) => error && '#ff623f' };
`;
