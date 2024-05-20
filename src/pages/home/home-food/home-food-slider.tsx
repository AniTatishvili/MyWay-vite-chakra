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

import vienna_video from "../../../app/assets/videos/home/home-destination/vienna.mp4";
import baku_video from "../../../app/assets/videos/home/home-destination/baku.mp4";
import georgia_video from "../../../app/assets/videos/home/home-destination/1.mp4";
import hungary_video from "../../../app/assets/videos/home/home-destination/2.mp4";
import israel_video from "../../../app/assets/videos/home/home-destination/3.mp4";

import vienna_img from "../../../app/assets/images/home/home-destination/vienna.jpg";
import baku_img from "../../../app/assets/images/home/home-destination/baku.jpg";
import budapest_img from "../../../app/assets/images/home/home-destination/budapest.jpg";

interface SliderItemType {
  videoSource: string;
  bannerSource: string;
}

const silderItemsArr: SliderItemType[] = [
  {
    videoSource: hungary_video,
    bannerSource: budapest_img,
  },
  {
    videoSource: baku_video,
    bannerSource: baku_img,
  },
  {
    videoSource: georgia_video,
    bannerSource: budapest_img,
  },
  {
    videoSource: vienna_video,
    bannerSource: vienna_img,
  },
  {
    videoSource: israel_video,
    bannerSource: baku_img,
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
