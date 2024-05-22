import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { HomeDestinationSliderButton } from "../home-destination";
import { HomeFoodSliderItem } from "./home-food-slider-item";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import bistro_box from "../../../app/assets/videos/home/home-food/bistro-box.mp4";
import fun_park from "../../../app/assets/videos/home/home-food/fun-park.mp4";
import street_food from "../../../app/assets/videos/home/home-food/street-food.mp4";

import bistro_img from "../../../app/assets/images/home/home-food/bistro.png";
import fun_park_img from "../../../app/assets/images/home/home-food/fun-food.png";
import street_food_img from "../../../app/assets/images/home/home-food/street-food.png";

interface SliderItemType {
  videoSource: string;
  bannerSource: string;
}

const silderItemsArr: SliderItemType[] = [
  {
    videoSource: bistro_box,
    bannerSource: bistro_img,
  },
  {
    videoSource: fun_park,
    bannerSource: fun_park_img,
  },
  {
    videoSource: street_food,
    bannerSource: street_food_img,
  },
];

export const HomeFoodSlider = () => {
  const [swiperKey] = React.useState(0);
  const refSlide = React.useRef<SwiperRef>(null);

  const handleClickChangeSlide = (pos: string) => {
    console.log(222);
    pos === "left" ? refSlide.current?.swiper.slidePrev() : refSlide.current?.swiper.slideNext();
  };

  return (
    <Flex w={"60%"} justify={"center"} pos={"relative"}>
      <Flex w={"calc(100% - 44px)"}>
        <Swiper
          key={swiperKey}
          ref={refSlide}
          grabCursor={false}
          loop={true}
          // modules={[Navigation]}
          navigation={false}
          // onSwiper={() => setVideoSoundState(true)}
          spaceBetween={10}
          slidesPerView={1}>
          {silderItemsArr.map((item, i) => (
            <SwiperSlide key={i}>
              <HomeFoodSliderItem videoSource={item.videoSource} bannerSource={item.bannerSource} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Button
        onClick={() => handleClickChangeSlide("left")}
        pos={"absolute"}
        top={"50%"}
        left={"0"}
        transform={"translateY(-50%)"}
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
        transform={"translateY(-50%)"}
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
  );
};
