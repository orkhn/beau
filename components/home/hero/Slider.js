import * as styled from "./sliderStyles";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <>
      <styled.SwipperContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <Image
              src="/images/misc/advertisementSliderPic1.jpg"
              alt="Slider picture 1"
              layout="fill"
              quality="100"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/misc/advertisementSliderPic2.jpg"
              alt="Slider picture 2"
              layout="fill"
              quality="100"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/misc/advertisementSliderPic3.jpg"
              alt="Slider picture 3"
              layout="fill"
              quality="100"
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </styled.SwipperContainer>
    </>
  );
};

export default Slider;
