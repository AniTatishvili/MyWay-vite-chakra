import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { Flex, Box, Image } from "@chakra-ui/react";
import { PTitle } from "src/shared/ui/headings";
import { PButton } from "src/shared/ui/buttons";

import beauty_relax from "../../../app/assets/images/home/home-products/beauty&relax.jpg";
import capsule_sleep_pod from "../../../app/assets/images/home/home-products/capsule-sleep-pod.jpg";
import company_seat from "../../../app/assets/images/home/home-products/company-seat.jpg";
import co_work from "../../../app/assets/images/home/home-products/co-work.jpg";
import cube_room from "../../../app/assets/images/home/home-products/cube-room.jpg";
import hostel from "../../../app/assets/images/home/home-products/hostel.jpg";
import media_studio from "../../../app/assets/images/home/home-products/media-studio.jpg";
import internet_telephone from "../../../app/assets/images/home/home-products/internet&telephone.jpg";

interface SliderItemType {
  id: number;
  src: string;
  product_text: string;
}

const capsuleItemsArr: SliderItemType[] = [
  {
    id: 1,
    src: beauty_relax,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.1",
  },
  {
    id: 2,
    src: capsule_sleep_pod,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.2",
  },
  {
    id: 3,
    src: company_seat,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.3",
  },
  {
    id: 4,
    src: co_work,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.4",
  },
  {
    id: 5,
    src: cube_room,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.5",
  },
  {
    id: 6,
    src: hostel,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.6",
  },
  {
    id: 7,
    src: media_studio,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.7",
  },
  {
    id: 8,
    src: internet_telephone,
    product_text: "SLEEP_AT_MYWAY.PRODUCTS.8",
  },
];

export const HomeProducts = () => {
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
