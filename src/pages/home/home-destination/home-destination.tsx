import React from "react";
import { useTranslation } from "react-i18next";
import { PageSectionContent } from "src/entities/layouts/PageSectionContent";
import { Box, Flex, Button } from "@chakra-ui/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { PTitle } from "src/shared/ui/headings";
import { HomeDestinationSliderButton } from "./home-destination-slider-button";
import { HomeDestinationSliderItem } from "./home-destination-slider-item";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import vienna_video from "../../../app/assets/videos/home/home-destination/austria.mp4";
import baku_video from "../../../app/assets/videos/home/home-destination/azerbaijan.mp4";
import georgia_video from "../../../app/assets/videos/home/home-destination/georgia.mp4";
import hungary_video from "../../../app/assets/videos/home/home-destination/hungary.mp4";
import israel_video from "../../../app/assets/videos/home/home-destination/israel.mp4";

import vienna_img from "../../../app/assets/images/home/home-destination/vienna.jpg";
import baku_img from "../../../app/assets/images/home/home-destination/baku.jpg";
import budapest_img from "../../../app/assets/images/home/home-destination/budapest.jpg";

import hungary_icon from "../../../app/assets/images/home/home-destination-icons/hungary.png";
import azerbaijan_icon from "../../../app/assets/images/home/home-destination-icons/azerbaijan.png";
import georgia_icon from "../../../app/assets/images/home/home-destination-icons/georgia.png";
import israel_icon from "../../../app/assets/images/home/home-destination-icons/israel.png";
import austria_icon from "../../../app/assets/images/home/home-destination-icons/austria.png";

interface SliderItemType {
  videoSource: string;
  bannerSource: string;
  countryName: string;
  iconSource: string;
}

const silderItemsArr: SliderItemType[] = [
  {
    videoSource: hungary_video,
    bannerSource: budapest_img,
    countryName: "NEXT_DESTINATION.TITLES.HUNGARY",
    iconSource: hungary_icon,
  },
  {
    videoSource: baku_video,
    bannerSource: baku_img,
    countryName: "NEXT_DESTINATION.TITLES.AZERBAIJAN",
    iconSource: azerbaijan_icon,
  },
  {
    videoSource: georgia_video,
    bannerSource: budapest_img,
    countryName: "NEXT_DESTINATION.TITLES.GEORGIA",
    iconSource: georgia_icon,
  },
  {
    videoSource: vienna_video,
    bannerSource: vienna_img,
    countryName: "NEXT_DESTINATION.TITLES.HUNGARY",
    iconSource: austria_icon,
  },
  {
    videoSource: israel_video,
    bannerSource: baku_img,
    countryName: "NEXT_DESTINATION.TITLES.ISRAEL",
    iconSource: israel_icon,
  },
];

export const HomeDestination = () => {
  const { t } = useTranslation("home");
  const [swiperKey] = React.useState(0);
  const refSlide = React.useRef<SwiperRef>(null);
  // SwiperCore.use([Navigation]);

  const handleClickChangeSlide = (pos: string) => {
    console.log(222);
    pos === "left" ? refSlide.current?.swiper.slidePrev() : refSlide.current?.swiper.slideNext();
  };

  return (
    <Flex bg={"#eaeaea"}>
      <PageSectionContent>
        <Flex justify={"center"} pos={"relative"}>
          <Box w={"calc(100% - 44px)"} overflow={"hidden"}>
            <PTitle>{t("TITLES.YOUR_NEXT_DESTINATION")}</PTitle>
            <Box as="span" fontSize={{ base: "14px", md: "18px" }}>
              {t("NEXT_DESTINATION.DESC")}
            </Box>
            <Swiper
              key={swiperKey}
              ref={refSlide}
              style={{
                height: "auto",
                maxHeight: "675px",
                overflow: "visible",
                margin: "3rem 0 4rem",
              }}
              onSlideChange={() => console.log("swiper changed")}
              grabCursor={false}
              loop={true}
              // modules={[Navigation]}
              navigation={false}
              // onSwiper={() => setVideoSoundState(true)}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 4 },
              }}>
              {silderItemsArr.map((item, i) => (
                <SwiperSlide key={i}>
                  <HomeDestinationSliderItem videoSource={item.videoSource} bannerSource={item.bannerSource} iconSource={item.iconSource} countryName={item.countryName} />
                  {/* <Flex flexDir={"column"} align={"center"} gap={4}>
                    <Box
                      w={"50px"}
                      h={"50px"}
                      bg={"brand.blue"}
                      borderRadius={"50%"}
                      pos={"absolute"}
                      top={"-25px"}
                      transition={"all 350ms"}
                      p={"10px"}
                      zIndex={3}
                      _hover={{ background: "#fff" }}>
                      <Image src={item.icon_src} alt="icon" />
                    </Box>
                    <Box h={"100%"} bg={"#fff"} borderRadius={"4px"} boxShadow={"1px 0 6px 1px rgba(0,0,0,.16);"} p={3}>
                      <Box w={"100%"} maxW={"275px"} h={"223px"} bg={"#000"} pos={"relative"} zIndex={1}>
                        <video controls autoPlay muted loop src={item.src}></video>
                        <Image src={item.banner_src} alt="icon" w={"100%"} h={"100%"} pos={"absolute"} top={"0"} left={"0"} zIndex={2} objectFit={"cover"} />
                      </Box>
                      <Flex flexDir={"column"}>
                        <Box as="span" fontSize={"26px"} p={4}>
                          {t(item.country)}
                        </Box>
                      </Flex>
                    </Box>
                    <PButton>{t("NEXT_DESTINATION.BUTTONS.READ_MORE")}</PButton>
                  </Flex> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Button
            onClick={() => handleClickChangeSlide("left")}
            pos={"absolute"}
            top={"50%"}
            left={"0"}
            w={"44px"}
            h={"44px"}
            borderRadius={"50%"}
            zIndex={"99"}
            bg={"brand.greyC"}
            _hover={{
              background: "#fff",
            }}>
            <HomeDestinationSliderButton icon={FaArrowLeft} direct={"left"} size={9} />
          </Button>
          <Button
            onClick={() => handleClickChangeSlide("right")}
            pos={"absolute"}
            top={"50%"}
            right={"0"}
            w={"44px"}
            h={"44px"}
            borderRadius={"50%"}
            zIndex={"99"}
            bg={"brand.greyC"}
            _hover={{
              background: "#fff",
            }}>
            <HomeDestinationSliderButton icon={FaArrowRight} direct={"right"} size={9} />
          </Button>
        </Flex>
      </PageSectionContent>
    </Flex>
  );
};
