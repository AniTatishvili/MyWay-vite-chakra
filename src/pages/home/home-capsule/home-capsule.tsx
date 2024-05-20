import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { Flex, Box, Image } from "@chakra-ui/react";
import { PTitle } from "src/shared/ui/headings";
import { PButton } from "src/shared/ui/buttons";

import capsule_hotel_1 from "../../../app/assets/images/home/home-capsule-hotel/1.jpg";
import capsule_hotel_2 from "../../../app/assets/images/home/home-capsule-hotel/10.jpg";
import capsule_hotel_3 from "../../../app/assets/images/home/home-capsule-hotel/11.jpg";

interface SliderItemType {
  id: number;
  src: string;
  product_text: string;
}

const capsuleItemsArr: SliderItemType[] = [
  {
    id: 1,
    src: capsule_hotel_1,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.1",
  },
  {
    id: 2,
    src: capsule_hotel_2,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.2",
  },
  {
    id: 3,
    src: capsule_hotel_3,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.3",
  },
  {
    id: 4,
    src: capsule_hotel_1,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.4",
  },
  {
    id: 5,
    src: capsule_hotel_2,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.5",
  },
  {
    id: 6,
    src: capsule_hotel_3,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.6",
  },
  {
    id: 7,
    src: capsule_hotel_1,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.7",
  },
  {
    id: 8,
    src: capsule_hotel_2,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.8",
  },
];

export const HomeCapsule = () => {
  const { t } = useTranslation("home");

  return (
    <PageSectionContent>
      <PTitle>{t("TITLES.SLEEP_AT_MYWAY")}</PTitle>
      <Box as="span" fontSize={{ base: "14px", md: "18px" }}>
        {t("NEXT_DESTINATION.DESC")}
      </Box>
      <Flex flexDir={"row"} justify={"start"} flexWrap={"wrap"} m={"2rem 0 4rem"} gap={10}>
        {capsuleItemsArr.map((item) => {
          return (
            <Flex key={item.id} flexDir={"column"} alignItems={"center"} gap={6}>
              <Flex flexDir={"column"}>
                <Box w={"442px"} h={"320px"} bg={"#fff"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
                  <Image src={item.src} alt="capsule" w={"100%"} h={"100%"} objectFit={"cover"} />
                </Box>
                <Box as="span" fontSize={"26px"} p={4}>
                  {t(item.product_text)}
                </Box>
              </Flex>
              <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
            </Flex>
          );
        })}
      </Flex>
    </PageSectionContent>
  );
};
