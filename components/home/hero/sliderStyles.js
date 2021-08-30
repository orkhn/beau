import styled from "styled-components";

export const SwipperContainer = styled.div`
  width: 90rem;
  height: 45rem;
  border-radius: 2rem;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-pagination {
    &-bullet {
      background-color: transparent;
      border: 2px solid #000;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      opacity: 1;
    }

    &-bullet-active {
      background-color: #000;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    color: #000;
  }

  .swiper:hover .swiper-button-prev {
    display: block;
  }
  .swiper:hover .swiper-button-next {
    display: block;
  }
`;
