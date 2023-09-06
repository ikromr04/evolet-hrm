import { useLocation } from 'react-router-dom'
import { Image, Wrapper } from './styled'
import logo from '/img/main-logo.svg'
import { AppRoute } from '../../../const'

export default function MainLogo(): JSX.Element {
  const location = useLocation()
  const { as, to } = location.pathname === '/'
    ? { as: 'div', to: '' }
    : { as: '', to: AppRoute.Main }

  return (
    <Wrapper as={as} to={to}>
      <Image
        src={logo}
        width={90}
        height={50}
        alt="To the main"
      />
    </Wrapper>
  )
}
