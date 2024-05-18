import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ReactCountryFlag } from "react-country-flag";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { HeaderMenu } from "./menu/header-menu";
import { MobileMenu } from "src/entities/menu";
import { Logotype } from "src/shared/ui/logotype";
import s from "./header.module.scss";

interface Language {
  [key: string]: { nativeName: string };
}

const LNGS: Language = {
  az: { nativeName: "Azərbaycan dili" },
  en: { nativeName: "English" },
  ge: { nativeName: "ქართული" },
  ru: { nativeName: "Русский" },
};

export const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const handleOption = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const lngIconCode = i18n.resolvedLanguage && i18n.resolvedLanguage !== "en" ? i18n.resolvedLanguage : "us";

  return (
    <Flex className={s.header}>
      <PageSectionContent>
        <Flex align={"center"} justify={"space-between"}>
          <Logotype />
          <Flex align={"center"} flexDir={"row"} gap={{ base: 4, md: 8 }}>
            <Box className={s.desktop}>
              <HeaderMenu />
            </Box>
            <Box className={s.mobile}>
              <MobileMenu />
            </Box>
            <Menu>
              <MenuButton
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                // p={"6px 8px"}
                border={"none"}
                // borderRadius={"4px"}
                transition={"all 350ms, border 100ms"}
                // boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"}
                // color={"brand.gold"}
                _hover={
                  {
                    // borderColor: "brand.blue",
                    // background: "brand.blue",
                    // boxShadow: "none",
                    // color: "#fff",
                  }
                }>
                <Flex align={"center"} justify={"center"} gap={"1"}>
                  <Flex w={6} h={6} justify={"center"} align={"center"} borderRadius={"50%"} overflow={"hidden"}>
                    <ReactCountryFlag
                      countryCode={lngIconCode}
                      svg
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Flex>
                  {/* <Text fontSize={"16px"} fontWeight={"600"} textTransform={"capitalize"}>
                      {i18n.resolvedLanguage && i18n.resolvedLanguage}
                    </Text> */}
                  <MdKeyboardArrowDown />
                </Flex>
              </MenuButton>
              <MenuList>
                {Object.keys(LNGS).map((lng) => (
                  <MenuItem key={lng} onClick={() => handleOption(lng)} color={i18n.resolvedLanguage === lng ? "#2DA2DC" : ""} textTransform={"capitalize"} fontSize={"14px"}>
                    {LNGS[lng].nativeName}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </PageSectionContent>
    </Flex>
  );
};
