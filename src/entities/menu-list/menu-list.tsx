import React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MenuListProps {
  flexDir: any;
  gap: string | number;
}

export const MenuList: React.FC<MenuListProps> = ({ flexDir, gap }) => {
  const { t } = useTranslation("common");

  return (
    <List display={"flex"} flexDir={flexDir} gap={gap}>
      <ListItem className="header-menu-link" pos={"relative"}>
        <NavLink to={"/"}>{t("NAVIGATION.MENU.HOME")}</NavLink>
      </ListItem>
      <ListItem className="header-menu-link">
        <NavLink to={"/destination"}>{t("NAVIGATION.MENU.DESTINATION")}</NavLink>
      </ListItem>
      <ListItem className="header-menu-link">
        <NavLink to={"/sleep"}>{t("NAVIGATION.MENU.SLEEP")}</NavLink>
      </ListItem>
      <ListItem className="header-menu-link">
        <NavLink to={"/bar&restaurant"}>{t("NAVIGATION.MENU.BAR_RESTAURANT")}</NavLink>
      </ListItem>
      <ListItem className="header-menu-link">
        <NavLink to={"/contact"}>{t("NAVIGATION.MENU.CONTACT")}</NavLink>
      </ListItem>
    </List>
  );
};
