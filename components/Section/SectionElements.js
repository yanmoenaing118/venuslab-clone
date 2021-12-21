import styled from "styled-components";

export const MySection = styled.section`
  width: 100%;
  overflow: hidden;

  margin-top: -4.5%;

  background-color: ${(props) => props.bgColor};
  clip-path: ${(props) => props.clipPath};

  @media screen and (max-width: 1000px) {
    margin-top: -7%;
  }

  @media screen and (max-width: 920px) {
    margin-top: -8%;
  }

  @media screen and (max-width: 896px) {
    margin-top: -10%;
  }

  @media screen and (max-width: 750px) {
    margin-top: -12%;
  }

  @media screen and (max-width: 650px) {
    margin-top: -14%;
  }

  @media screen and (max-width: 580px) {
    margin-top: -16%;
  }

  @media screen and (max-width: 480px) {
    margin-top: -19%;
  }

  @media screen and (max-width: 320px) {
    margin-top: -26%;
  }
`;
export const MySectionWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.img_first ? "row-reverse" : "row")};
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const MySectionItem = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const MySectionItemContent = styled.div`
  /* height: 100vh; */

  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 10em 0;

  /* @media screen and (max-width: 1000px) {
    padding: 12em 0;
    width: 88%;
  } */

  @media screen and (max-width: 950px) {
    /* padding: 12rem 0;
    width: 95%; */
  }

  @media screen and (max-width: 1000px) {
    width: 95%;
    padding-top: 0;
    padding-bottom: 8em;
  }
`;

export const MySectionItemContentImage = styled.img``;
export const MySectionItemContentTitle = styled.h1`
  font-size: 4.45rem;
  color: ${({ color }) => color};

  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 896px) {
    font-size: 2.6rem;
  }
`;
export const MySectionItemContentSubtitle = styled.p`
  font-weight: lighter;
  margin: 0.75em 0;
  color: ${({ color }) => color};
`;
export const MySectionItemContentPara = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  color: ${({ color }) => color};
`;
export const MySectionItemContentBtn = styled.div`
  margin-top: 1.2rem;
  align-self: flex-end;
`;
export const MySectionItemAnimated = styled.div`
  /* max-width: 300; */
  overflow: hidden;
  height: 90vh;
  width: 100%;
  margin: auto;
  /* 
  display: flex;
  align-items: center;
  justify-content: center; */

  /* background-color: purple; */
  position: relative;

  @media screen and (max-width: 1000px) {
    height: 60vh;
    padding-top: 14rem;
  }
`;

export const MySectionItemAnimatedCircle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  opacity: 0;

  background-image: ${(props) => props.circleBg};

  transition: all 0.2s ease;
  overflow: hidden;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%) scale(0);

  @media screen and (max-width: 1000px) {
    width: 280px;
    height: 280px;
  }

  /* transform: scale(0); */

  /* ${({ img_first }) =>
    img_first
      ? `


  `
      : `

    transform: translate(50%, -50%)
  `} */
`;

export const MySectionItemAnimatedImage = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${(props) => `url(${props.bgImage})`};
  transition: transform 0.3s ease;
  width: 80%;

  height: 80%;

  position: absolute;

  /* top: 50%;
  left: 50%;

  transform: translate(-50%,-50%); */

  img {
    width: 100%;
    height: 100%;
  }

  ${({ img_first }) =>
    !img_first
      ? `
        top: 100%;
        left: 100%;
      `
      : `
        right: 100%;
        top: 100%;
      `}
`;
