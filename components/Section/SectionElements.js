import styled from "styled-components";

export const MySection = styled.section`
  width: 100%;
  overflow: hidden;

  background-color: ${(props) => props.bgColor};
`;
export const MySectionWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.img_first ? "row-reverse" : "row")};
  @media screen and (max-width: 768px) {
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
  padding: 1em;
  display: flex;
  align-items: center;
  width: 73.5%;
  margin: auto;
`;

export const MySectionItemContentImage = styled.img``;
export const MySectionItemContentTitle = styled.h1`
  font-size: 3rem;
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
  height: 100vh;
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 60vh;
  }
`;

export const MySectionItemAnimatedCircle = styled.div`
  width: 430px;
  height: 430px;
  border-radius: 50%;
  position: relative;
  opacity: 0;

  background-image: ${(props) => props.circleBg};

  transition: all 0.2s ease;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 220px;
    height: 220px;
  }

  /* transform: scale(0); */

  /* ${({ img_first }) =>
    img_first
      ? `

  transform: translate(-50%, -50%);
  `
      : `

    transform: translate(50%, -50%)
  `} */
`;

export const MySectionItemAnimatedImage = styled.div`
  transition: transform 0.3s ease;
  width: 560px;

  height: 560px;

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

  @media screen and (max-width: 768px) {
    width: 400px;

    height: 400px;
  }
`;
