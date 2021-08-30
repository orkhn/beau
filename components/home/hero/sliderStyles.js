import styled from "styled-components";

export const SwipperContainer = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

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
    display: flex;
    justify-content: center;
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
