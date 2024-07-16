import React from "react";
import { NavLinkTypo, NavLinkWrapper, TanStackLink } from "@/app/shared/components/header/components/nav-link/style";

export interface HeaderNavLinkPropTypes {
  linkName: string;
  linkUrl: string;
  active?: boolean;
  onClick?: (...args: any) => void;
}

const NavLink = (props: HeaderNavLinkPropTypes) => {
  return (
    <TanStackLink to={props.linkUrl}>
      {({isActive}) => {
        return (
          <NavLinkWrapper active={isActive}>
            <NavLinkTypo
              active={isActive}
              variant="textBase"
            >
              {props.linkName}
            </NavLinkTypo>
          </NavLinkWrapper>
        )
      }}
    </TanStackLink>

  );
};

export default React.memo(NavLink);
