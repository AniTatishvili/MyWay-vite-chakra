import React, { RefObject, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Box, Button, Flex } from "@chakra-ui/react";
import { BookingCalendarForm } from "src/widgets/booking-calendar-form";
// import { PButton } from "shared/ui";
// import { HomeSliderItem } from "./home-slider-item";

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// swiper
import Autoplay from "swiper";
import Navigation from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// assets

import MyWayCapsuleHotel from "../../../app/assets/videos/MyWayCapsuleHotel.webm";

// import { SlideSoureType, SliderItemType } from "shared/types/homepage";
// import { HomeSliderButton } from "./home-slider-button";
// import { HomeSliderSoundBtn } from "./home-slider-sound-btn";


export const HomeSlider = () => {
  const { t, i18n } = useTranslation("home");

  const [videoSoundState, setVideoSoundState] = useState<boolean>(true);

  const [swiperKey, setSwiperKey] = useState(0);

  const refSlide = useRef<SwiperRef>(null);
  const refBtn = useRef<HTMLButtonElement>(null);

  const handleClickChangeSlide = (pos: string) => {
    pos === "left" ? refSlide.current?.swiper.slidePrev() : refSlide.current?.swiper.slideNext();
  };

  return (
    <Flex w={"100%"} h={"100%"} flexDir={"column"} justifyContent={"100%"} pos={"relative"}>
      <Flex w={"100%"}>
        <Flex
          pos={"absolute"}
          top={{ base: "30%", md: "25%" }}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          flexDir={"column"}
          gap={{ base: "2", md: "5" }}
          letterSpacing={"2px"}
          fontFamily={"RalewayVariable"}
          fontSize={"3xl"}
          fontWeight={"extrabold"}
          textAlign={"center"}
          color={"brand.light"}
          zIndex={"2"}>
          {/* <Box as="span" fontSize={{ base: "xl", md: "4xl", lg: "6xl" }} textShadow={"md"}>
            money
            <Box as="span" color={"brand.red"}>
              4
            </Box>
            you.financial
          </Box> */}
        </Flex>
        <Swiper
          key={swiperKey}
          ref={refSlide}
          style={{
            height: "auto",
          //   maxHeight: "calc(100vh - 100px)",
              maxHeight: "675px",
            overflow: "hidden",
          }}
          // onSlideChange={(swiper) => handleSwiperTurnOffSlide(swiper)}
          // autoplay={{ delay: 42000, disableOnInteraction: false }}
          // effect={"creative"}
          // grabCursor={false}
          loop={true}
          // modules={[Autoplay, Navigation]}
          navigation={false}
          // onSwiper={() => setVideoSoundState(true)}
          slidesPerView={1}
          spaceBetween={0}>
          {/* {videoItemsArr.map((item, i) => ( */}
            <SwiperSlide>
              <Box h={"100%"}>
                <video autoPlay loop muted={true} style={{ width: "100%", height: "100%", background:"#000", objectFit: "contain" }}>
                  <source src={MyWayCapsuleHotel} />
              </video>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box h={"100%"}>
                  <video autoPlay loop muted={true} style={{ width: "100%", height: "100%", background:"#000", objectFit: "contain" }}>
                      <source src={MyWayCapsuleHotel} />
                  </video>
              </Box>
            </SwiperSlide>
          {/* ))} */}
        </Swiper>

        <Button
          onClick={() => handleClickChangeSlide("left")}
          pos={"absolute"}
          top={"50%"}
          left={"0"}
          w={"60px"}
          // height={"100%"}
          // px={"5px"}
          zIndex={"99"}
          bg={"transparent"}
          _hover={{
            background: "transparent",
          }}
          // bg={"#ffffff60"}
          // borderRadius={"0px"}
        >
          {/* <HomeSliderButton icon={MdOutlineKeyboardDoubleArrowLeft} direct={"left"} size={9} /> */}
        </Button>
        <Button
          onClick={() => handleClickChangeSlide("right")}
          pos={"absolute"}
          top={"50%"}
          right={"0"}
          w={"60px"}
          // height={"100%"}
          // px={"5px"}
          zIndex={"99"}
          bg={"transparent"}
          _hover={{
            background: "transparent",
          }}
          // bg={"#ffffff60"}
          // borderRadius={"0px"}
        >
          {/* <HomeSliderButton icon={MdOutlineKeyboardDoubleArrowRight} direct={"right"} size={9} /> */}
        </Button>
      </Flex>
      <Flex pos={"absolute"} bottom={"30px"} left={"50%"} zIndex={"99"} transform={"translate(-50%, -30px)"}>
        <BookingCalendarForm />
      </Flex>
    </Flex>
  );
};

