import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 90%;
  height: 14.7rem;
  background-color: #fff;
  border-radius: 1.6rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  a {
    position: absolute;
    bottom: 1.8rem;
    left: 5rem;
    font-size: 2.5rem;
    font-weight: 600;
    background: linear-gradient(#000 0 0) bottom / var(--d, 0) 3px no-repeat;
    transition: 0.3s;
  }

  a:hover {
    --d: 100%;
  }
`;
