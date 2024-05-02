import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { PageSectionContent } from "../../entities/layouts/PageSectionContent";
import { Flex, Box, List, ListItem, Text, Hide } from "@chakra-ui/react";
import { SocialIconsLine } from "src/entities/social-icons-line";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <Flex w="100%" flexDir={"column"} bg="#414445" color="#fff" fontSize="15px" pt={"40px"} gap={4}>
      <PageSectionContent>
        <Flex flexDir={"row"} justify={"space-between"} flexWrap={"wrap"} gap={4}>
          <Flex flexDir={"column"} align={"flex-start"} gap={{ base: 3, md: 6 }}>
            <Box as="h4" fontSize={{ base: "19px", md: "24px" }}>
              {t("FOOTER.HEADINGS.SERVICE")}
            </Box>
            <List display={"flex"} flexDir={"column"} alignItems={"flex-start"} fontSize={{ base: "14px", md: "18px" }} gap={{ base: 2, md: 4 }}>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.CONTACT")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.FAQ")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.MEDIA_PRESS")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.INVESTORS")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.CAREERS")}</NavLink>
              </ListItem>
            </List>
          </Flex>
          <Flex flexDir={"column"} align={"flex-start"} gap={{ base: 3, md: 6 }}>
            <Box as="h4" fontSize={{ base: "19px", md: "24px" }}>
              {t("FOOTER.HEADINGS.LEGALS")}
            </Box>
            <List display={"flex"} flexDir={"column"} alignItems={"flex-start"} fontSize={{ base: "14px", md: "18px" }} gap={{ base: 2, md: 4 }}>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.PRIVACY_POLICY")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.COOKIES_POLICY")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.TERMS_CONDITIONS")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.DISCLAIMER")}</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>{t("FOOTER.LINKS.ACCESSIBILITY")}</NavLink>
              </ListItem>
            </List>
          </Flex>
          <Flex flexDir={"column"} justify={"flex-start"} gap={{ base: 3, md: 6 }}>
            <Box as="h4" fontSize={{ base: "19px", md: "24px" }}>
              {t("FOOTER.HEADINGS.ACCESSIBILITY")}
            </Box>
            <List display={"flex"} flexDir={"column"} alignItems={"flex-start"} fontSize={{ base: "14px", md: "18px" }} gap={{ base: 2, md: 4 }}></List>
          </Flex>
          <Flex flexDir={"column"} justify={"flex-end"} gap={2}>
            <SocialIconsLine />
          </Flex>
        </Flex>
      </PageSectionContent>
      <Flex w="100%" borderTop={"1px solid #fff"} gap={4}>
        <PageSectionContent>
          <Flex alignItems="center" justifyContent={{ base: "center", md: "space-between" }} w="100%" color="#fff" fontSize={{ base: "14px", md: "18px" }} gap={4}>
            <Hide below="md">
              <Text maxW={{ base: "100%", lg: "40%" }} textAlign={"start"}>
                {t("FOOTER.TEXTS.ANNOTATION")}
              </Text>
            </Hide>
            <Text fontStyle="oblique">{/* {t("FOOTER.COPYRIGHT", { year: year })} */}© 2024 MyWay. All rights reserved.</Text>
          </Flex>
        </PageSectionContent>
      </Flex>
    </Flex>
  );
};
