import styled, { css } from 'styled-components';

export const Dl = styled('dl').withConfig({
  shouldForwardProp: (props) => !['detailed'].includes(props),
})<{ detailed?: boolean }>`
  margin: 0;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  font-size: 14px;
  color: #1d1d1d;

  ${({ detailed }) => detailed && css`
    display: flex;
    flex-direction: column;
    gap: 0;
    font-weight: 500;
  `}
`;

export const Dt = styled('dt').withConfig({
  shouldForwardProp: (props) => !['detailed'].includes(props),
})<{ detailed?: boolean }>`
  color: #6c86ab;
  font-weight: 500;

  ${({ detailed }) => detailed && css`
    font-size: 12px;
    margin-bottom: 2px;
  `}
`;

export const Dd = styled('dd').withConfig({
  shouldForwardProp: (props) => !['detailed'].includes(props),
})<{ detailed?: boolean }>`
  margin: 0;

  ${({ detailed }) => detailed && css`

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  `}
`;
