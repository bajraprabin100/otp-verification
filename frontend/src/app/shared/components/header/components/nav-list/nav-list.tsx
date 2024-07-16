import React from "react";
import { NavigationData } from "src/app/shared/resources/navigation.data";
import { NavListWrapper } from "@/app/shared/components/header/components/nav-list/style";
import NavLink from "@/app/shared/components/header/components/nav-link/nav-link";

export interface NavListTypes {
  name: string;
  to?: string;
  url: string;
}
const NavList = () => {
  const navigationItems = NavigationData;
  return (
    <>
      <NavListWrapper>
        {navigationItems?.map((item: NavListTypes) => {
          return (
            <NavLink
              linkName={item.name}
              onClick={() => {}}
              key={item.name}
              linkUrl={item.url}
              active={true}
            />
          );
        })}
      </NavListWrapper>
    </>
  );
};

export default React.memo(NavList);
