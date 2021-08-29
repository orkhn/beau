import styled, { createGlobalStyle } from "styled-components";

export const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 99;
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -15.2rem;
    margin-left: -7.7rem;
    width: 15.2rem;
    height: 15.2em;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Finished = createGlobalStyle`
  html {
    background-color: #141414;
  }
  body {
    overflow: visible;
    color: #fff;
  }
`;
