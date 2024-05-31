import React from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

export const PSlider = () => {
  const [swiperKey] = React.useState(0);
  const refSlide = React.useRef<SwiperRef>(null);

  return (
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
  );
};
