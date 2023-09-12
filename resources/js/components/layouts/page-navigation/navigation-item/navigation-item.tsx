import { Link, useLocation } from "react-router-dom";
import { Label, Links, LinksItem, MoreIcon, StyledButton, Wrapper } from "./styled";

type NavigationItemProps = {
  label: string;
  icon?: JSX.Element;
  href?: string;
  links?: { path: string, label: string }[];
  [rest: string]: unknown,
}

export default function NavigationItem({
  label,
  icon,
  href,
  links,
  ...rest
}: NavigationItemProps): JSX.Element {
  const location = useLocation();
  const isCurrent =
    location.pathname === href || links?.map(({ path }) => path).includes(location.pathname);

  return (
    <Wrapper {...rest}>
      <StyledButton as={href ? Link : ''} to={href} isCurrent={isCurrent} >
        {icon && icon}
        <Label isCurrent={isCurrent}>{label}</Label>
        {links && <MoreIcon width={16} height={16} />}
      </StyledButton>

      {links &&
        <Links>
          {links.map(({ path, label }) => (
            <LinksItem key={path} to={path}>{label}</LinksItem>
          ))}
        </Links>}
    </Wrapper>
  );
}
