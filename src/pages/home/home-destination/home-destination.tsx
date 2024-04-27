import React from 'react';
import { useTranslation } from "react-i18next";
import { PageSectionContent } from 'src/entities/layouts/PageSectionContent';
import { PTitle } from 'src/shared/ui/headings';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import capsule_hotel_1 from "../../../app/assets/images/home/home-capsule-hotel/1.jpg";
import capsule_hotel_2 from "../../../app/assets/images/home/home-capsule-hotel/10.jpg";
import capsule_hotel_3 from "../../../app/assets/images/home/home-capsule-hotel/11.jpg";
import capsule_hotel_4 from "../../../app/assets/images/home/home-capsule-hotel/12.jpg";
import capsule_hotel_5 from "../../../app/assets/images/home/home-capsule-hotel/16.jpg";
import { PButton } from 'src/shared/ui/buttons';
  
  interface SliderItemType {
    id: number;
    type: string;
    src: string;
    country: string;
    desc_text: string;
  }

const silderItemsArr: SliderItemType[] = [
    {
      id: 1,
      type: "image",
      src: capsule_hotel_1,
      country: "NEXT_DESTINATION.TITLES.HUNGARY",
      desc_text: "NEXT_DESTINATION.DESC.1"
    },
    {
      id: 2,
      type: "image",
      src: capsule_hotel_2,
      country: "NEXT_DESTINATION.TITLES.AZERBAIJAN",
      desc_text: "NEXT_DESTINATION.DESC.2"
    },
    {
        id: 3,
        type: "image",
        src: capsule_hotel_3,
        country: "NEXT_DESTINATION.TITLES.GEORGIA",
        desc_text: "NEXT_DESTINATION.DESC.3"
    },
    {
        id: 4,
        type: "image",
        src: capsule_hotel_4,
        country: "NEXT_DESTINATION.TITLES.ISRAEL",
        desc_text: "NEXT_DESTINATION.DESC.4"
    },
    {
        id: 5,
        type: "image",
        src: capsule_hotel_5,
        country: "NEXT_DESTINATION.TITLES.HUNGARY",
        desc_text: "NEXT_DESTINATION.DESC.1"
    },
  ];

export const HomeDestination = () => {
  const { t } = useTranslation("home");
  const [swiperKey] = React.useState(0);

  return (
    <Flex bg={"#eaeaea"}>
        <PageSectionContent>
            <PTitle>{t("TITLES.YOUR_NEXT_DESTINATION")}</PTitle>
            <Swiper
            key={swiperKey}
            style={{
              height: "auto",
              //   maxHeight: "calc(100vh - 100px)",
              maxHeight: "675px",
              overflow: "visible",
              margin: "2rem 0 4rem"
            }}
            // onSlideChange={(swiper) => handleSwiperTurnOffSlide(swiper)}
            // autoplay={{ delay: 42000, disableOnInteraction: false }}
            // effect={"creative"}
            // grabCursor={false}
            loop={true}
            // modules={[Autoplay, Navigation]}
            // navigation={true}
            // onSwiper={() => setVideoSoundState(true)}
            slidesPerView={4}
            spaceBetween={20}>
            {silderItemsArr.map((item) => (
              <SwiperSlide key={item.id}>
                <Flex flexDir={"column"} align={"center"} gap={4}>
                  <Box h={"100%"} bg={"#fff"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
                    <Image src={item.src} alt="slider_image" />
                    <Flex flexDir={"column"}>
                      <Box as="span" fontSize={"26px"} p={4}>{t(item.country)}</Box>
                      {/* <Box as="p">{t(item.desc_text)}</Box> */}
                    </Flex>
                  </Box>
                  <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
                </Flex>
            </SwiperSlide> 
            ))}
        </Swiper>
        </PageSectionContent>
    </Flex>
  )
}
