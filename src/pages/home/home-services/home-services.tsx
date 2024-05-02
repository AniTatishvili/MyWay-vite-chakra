import { useTranslation } from "react-i18next";
import { Flex, Box, Image } from "@chakra-ui/react";
import { PTitle } from "src/shared/ui/headings";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";

import drink from "../../../app/assets/images/home/home-services/drink.webp";
import eat from "../../../app/assets/images/home/home-services/eat.webp";
import enjoy from "../../../app/assets/images/home/home-services/enjoy.webp";
import sleep from "../../../app/assets/images/home/home-services/sleep.webp";

export const HomeServices = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <PageSectionContent>
        <Flex flexDir={"column"}>
          <PTitle>{t("TITLES.TRAVEL_AROUND_THE_WORLD")}</PTitle>
          <Box as="span" fontSize={{ base: "14px", md: "18px" }}>
            {t("SERVICES.DESC")}
          </Box>
        </Flex>
        <Flex flexDir={"row"} flexWrap={"wrap"} justify={"space-between"} my={{ base: 10, md: 16 }} gap={4}>
          <Flex flexDir={"column"} gap={4}>
            <Image src={sleep} alt="service" />
            <Box as="h3" color={"brand.gold"} fontSize={{ base: "22px", md: "30px" }} fontWeight={600}>
              {t("SERVICES.ITEMS.SLEEP")}
            </Box>
          </Flex>
          <Flex flexDir={"column"} gap={4}>
            <Image src={eat} alt="service" />
            <Box as="h3" color={"brand.gold"} fontSize={{ base: "22px", md: "30px" }} fontWeight={600}>
              {t("SERVICES.ITEMS.EAT")}
            </Box>
          </Flex>
          <Flex flexDir={"column"} gap={4}>
            <Image src={drink} alt="service" />
            <Box as="h3" color={"brand.gold"} fontSize={{ base: "22px", md: "30px" }} fontWeight={600}>
              {t("SERVICES.ITEMS.DRINK")}
            </Box>
          </Flex>
          <Flex flexDir={"column"} gap={4}>
            <Image src={enjoy} alt="service" />
            <Box as="h3" color={"brand.gold"} fontSize={{ base: "22px", md: "30px" }} fontWeight={600}>
              {t("SERVICES.ITEMS.ENJOY")}
            </Box>
          </Flex>
        </Flex>
      </PageSectionContent>
    </>
  );
};
