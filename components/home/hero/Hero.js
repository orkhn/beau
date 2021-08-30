import * as styled from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { AutoPlay, Navigation, Pagination } from "swiper";

SwiperCore.use([AutoPlay, Pagination, Navigation]);

const Hero = () => {
  return (
    <styled.Hero>
      <styled.SwipperContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </styled.SwipperContainer>
    </styled.Hero>
  );
};
export default Hero;
