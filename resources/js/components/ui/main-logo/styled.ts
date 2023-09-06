import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Wrapper = styled(Link)<{ to?: string }>`
  display: flex;
  max-width: max-content;
  text-decoration: none;
`

export const Image = styled.img`
  display: flex;
`
