import styled from "styled-components";

export const MyHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 2000;
  background-color: rgba(var(--dark), 0.96);

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ open }) => (!open ? `88px` : `66px`)};
  transition: height 0.34s ease;
`;

export const MyHeaderWrapper = styled.div`
  width: 100%;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 920px) {
    padding: 0 1.2em;
  }
`;

export const MyHeaderLogo = styled.div`
  color: #fff;
  max-width: 124px;
  min-width: 100px;
  padding: 0.34em 0;
  /* margin-top: -0.1em; */
  position: absolute;
  /* top: px; */
  top: ${({ open }) => (!open ? `20px` : `0`)};
  left: ${({ open }) => (!open ? `50%` : `16px`)};

  transform: ${({ open }) => (!open ? `translateX(-50%)` : `translateX(0)`)};

  transition: all 0.4s ease;

  a {
    display: flex;
    align-items: center;

    img {
      height: 100%;
    }
  }
`;
