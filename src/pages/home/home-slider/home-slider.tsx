import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Flex } from "@chakra-ui/react";
import { BookingCalendarForm } from "src/widgets/booking-calendar-form";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// assets

import MyWayCapsuleHotel from "../../../app/assets/videos/MyWayCapsuleHotel.webm";

export const HomeSlider = () => {
  const [swiperKey, setSwiperKey] = React.useState(0);

  const refSlide = useRef<SwiperRef>(null);

  return (
    <Flex w={"100%"} h={"100%"} flexDir={"column"} justifyContent={"100%"} pos={"relative"}>
      <Flex w={"100%"}>
        <Flex
          w={"1440px"}
          pos={"absolute"}
          top={{ base: "50%", md: "50%" }}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          flexDir={"column"}
          p={"0 1rem"}
          gap={{ base: "2", md: "5" }}
          letterSpacing={"2px"}
          fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
          fontWeight={"extrabold"}
          textAlign={"start"}
          color={"brand.white"}
          zIndex={"2"}>
          <Box as="span" w={"fit-content"} bg={"rgba(0, 0, 0, .8)"} transform={"rotate(-2deg)"} p={2}>
            Just like home!
          </Box>
          <Box as="span" w={"fit-content"} bg={"rgba(0, 0, 0, .8)"} p={2}>
            Simply somewhere else
          </Box>
        </Flex>
        <Swiper
          key={swiperKey}
          ref={refSlide}
          style={{
            height: "auto",
            maxHeight: "675px",
            overflow: "hidden",
          }}
          loop={true}
          navigation={false}
          slidesPerView={1}
          spaceBetween={0}>
          <SwiperSlide>
            <Box h={"100%"}>
              <video autoPlay loop muted={true} style={{ width: "100%", height: "100%", background: "#000", objectFit: "contain" }}>
                <source src={MyWayCapsuleHotel} />
              </video>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box h={"100%"}>
              <video autoPlay loop muted={true} style={{ width: "100%", height: "100%", background: "#000", objectFit: "contain" }}>
                <source src={MyWayCapsuleHotel} />
              </video>
            </Box>
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </Flex>
    </Flex>
  );
};
