import { PageSectionContent } from "../../../entities/layouts/PageSectionContent";
import { useTranslation } from "react-i18next";
import { Flex, Box, Text } from "@chakra-ui/react";
import { PTitle } from "../../../shared/ui/headings";
import { HomeFoodSlider } from "./home-food-slider";
import { PButton } from "src/shared/ui/buttons";
// import bg from "../../../app/assets/images/home/Untitled design.jpg";

export const HomeFood = () => {
  const { t } = useTranslation("home");
  // bg={"#eaeaea"}
  return (
    <Flex w={"100%"} bg={"#eaeaea"}>
      <PageSectionContent>
        <Flex w={"100%"} flexDir={"row"} justify={"space-between"} m={"2rem 0 4rem"} gap={10}>
          <HomeFoodSlider />
          <Flex flexDir={"column"} paddingLeft={"20px"}>
            <PTitle>{t("TITLES.THE_PLACE_FOR_GOOD_FOOD")}</PTitle>
            <Box as="span" fontSize={{ base: "14px", md: "18px" }} textAlign={"start"}>
              {t("SERVICES.DESC")}
            </Box>
            <Flex flexDir={"column"} gap={6}>
              <Flex mt={"24px"} gap={4}>
                <Flex>
                  <Text>Home-made food</Text>
                </Flex>
                <Flex>
                  <Text>At the right price</Text>
                </Flex>
              </Flex>
              <PButton w={"fit-content"}>Discover our Restaurants & Bars</PButton>
            </Flex>
          </Flex>
        </Flex>
      </PageSectionContent>
    </Flex>
  );
};
