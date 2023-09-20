import { Link, useLocation } from "react-router-dom";
import { ButtonTitle, Label, Links, LinksItem, LinksTitle, MoreIcon, StyledButton, Wrapper } from "./styled";

type NavigationItemProps = {
  label: string;
  icon?: JSX.Element;
  href?: string;
  isCollapsed?: boolean,
  links?: { path: string, label: string }[];
  [rest: string]: unknown,
}

export default function NavigationItem({
  label,
  icon,
  href,
  links,
  isCollapsed,
  ...rest
}: NavigationItemProps): JSX.Element {
  const location = useLocation();
  const isCurrent =
    location.pathname === href
    || links?.map(({ path }) => path).includes(location.pathname)
    || (href && href !== '/' && location.pathname.startsWith(href));

  return (
    <Wrapper {...rest} isCollapsed={isCollapsed}>
      <StyledButton
        as={href ? Link : ''}
        to={href}
        isCurrent={isCurrent || false}
      >
        {icon}
        <Label isCurrent={isCurrent || false} isCollapsed={isCollapsed}>{label}</Label>
        {links
          ? <MoreIcon isCollapsed={isCollapsed} width={16} height={16} />
          : <ButtonTitle>{label}</ButtonTitle>}
      </StyledButton>

      {links &&
        <Links>
          {isCollapsed && <LinksTitle>{label}</LinksTitle>}
          {links.map(({ path, label }) => (
            <LinksItem key={path} to={path}>{label}</LinksItem>
          ))}
        </Links>}
    </Wrapper>
  );
}
