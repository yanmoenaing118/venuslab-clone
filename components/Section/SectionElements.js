import styled from "styled-components";

export const MySection = styled.section`
  width: 100%;
  overflow: hidden;

  /* margin-top: -4%; */

  background-color: ${(props) => props.bgColor};
  /* clip-path: ${(props) => props.clipPath}; */

  /* -webkit-clip-path:  */
`;
export const MySectionWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.img_first ? "row-reverse" : "row")};
  @media screen and (max-width: 769px) {
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
  width: 73.5%;
  margin: auto;
`;

export const MySectionItemContentImage = styled.img``;
export const MySectionItemContentTitle = styled.h1`
  font-size: 4.45rem;
  color: ${({ color }) => color};
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

export const MySectionItemAnimated = styled.div`
  /* max-width: 300; */
  overflow: hidden;
  height: 80vh;
  width: 100%;
  margin: auto;
  /* 
  display: flex;
  align-items: center;
  justify-content: center; */

  /* background-color: purple; */
  position: relative;
`;

export const MySectionItemAnimatedCircle = styled.div`
  width: 50%;

  height: 50%;
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
  width: 70%;

  height: 70%;

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
