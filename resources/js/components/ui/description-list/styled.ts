import styled, { css } from 'styled-components';

export const Dl = styled('dl').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean }>`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  font-size: 14px;
  color: #1d1d1d;

  ${({ detailed, detailedInverse }) => (detailed || detailedInverse) && css`
    display: flex;
    flex-direction: column;
    gap: 0;
    font-weight: 500;
  `}
`;

export const Dt = styled('dt').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean }>`
  color: #6c86ab;
  font-weight: 500;

  ${({ detailed }) => detailed && css`
    font-size: 12px;
    margin-bottom: 2px;
  `}

  ${({ detailedInverse }) => detailedInverse && css`
    color: #1d1d1d;
    margin-bottom: 2px;
  `}
`;

export const Dd = styled('dd').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean }>`
  margin: 0;

  ${({ detailed, detailedInverse }) => (detailed || detailedInverse) && css`

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  `}

  ${({ detailedInverse }) => detailedInverse && css`
    font-size: 12px;
    color: #6c86ab;
  `}
`;
