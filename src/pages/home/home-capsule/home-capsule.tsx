import React from "react";
import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { Flex, Box, Image } from "@chakra-ui/react";
import { PTitle } from "src/shared/ui/headings";
import { PButton } from "src/shared/ui/buttons";

import capsule_hotel_1 from "../../../app/assets/images/home/home-capsule-hotel/1.jpg";
import capsule_hotel_2 from "../../../app/assets/images/home/home-capsule-hotel/10.jpg";
import capsule_hotel_3 from "../../../app/assets/images/home/home-capsule-hotel/11.jpg";

import man from "../../../app/assets/images/home/home-capsule-hotel/home-capsule-hotel-icons/man.png";
import woman from "../../../app/assets/images/home/home-capsule-hotel/home-capsule-hotel-icons/woman.png";
import grandfather from "../../../app/assets/images/home/home-capsule-hotel/home-capsule-hotel-icons/grandfather.png";
import grandmother from "../../../app/assets/images/home/home-capsule-hotel/home-capsule-hotel-icons/grandmother.png";
import shower from "../../../app/assets/images/home/home-capsule-hotel/home-capsule-hotel-icons/shower.png";

interface SliderItemType {
  id: number;
  src: string;
  desc_text: string;
}

const capsuleItemsArr: SliderItemType[] = [
  {
    id: 1,
    src: capsule_hotel_1,
    desc_text: "NEXT_DESTINATION.DESC.1",
  },
  {
    id: 2,
    src: capsule_hotel_2,
    desc_text: "NEXT_DESTINATION.DESC.2",
  },
  {
    id: 3,
    src: capsule_hotel_3,
    desc_text: "NEXT_DESTINATION.DESC.3",
  },
];

export const HomeCapsule = () => {
  const { t } = useTranslation("home");

  return (
    <PageSectionContent>
      <PTitle>{t("TITLES.SLEEP_AT_MYWAY")}</PTitle>
      <Flex flexDir={"row"} flexWrap={{ base: "wrap", md: "nowrap" }} m={"2rem 0 4rem"} gap={10}>
        {capsuleItemsArr.map((item) => {
          return (
            <Flex key={item.id} flexDir={"column"} alignItems={"center"} gap={6}>
              <Flex flexDir={"column"}>
                <Box h={"100%"} bg={"#fff"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
                  <Image src={item.src} alt="capsule" />
                </Box>
                <Box as="span" fontSize={"26px"} p={4}>
                  Capsule
                </Box>
              </Flex>
              <Flex w={"100%"} flexDir={"row"} justify={"space-between"} align={"center"}>
                <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                  <Flex>
                    <Image src={man} alt="man_image" w={"40px"} />
                    <Image src={woman} alt="woman_image" w={"40px"} />
                    <Image src={grandmother} alt="grandmother_image" w={"40px"} />
                    <Image src={grandfather} alt="grandfather_image" w={"40px"} />
                  </Flex>
                  <Box as="p" fontSize={"16px"} p={4}>
                    Up to 12 people
                  </Box>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"} gap={2}>
                  <Image src={shower} alt="shower_image" w={"40px"} />
                  <Box as="p" fontSize={"16px"} p={4}>
                    Shared bathroom
                  </Box>
                </Flex>
              </Flex>
              <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
            </Flex>
          );
        })}
      </Flex>
    </PageSectionContent>
  );
};
