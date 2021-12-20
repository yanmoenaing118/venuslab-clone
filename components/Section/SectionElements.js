import styled from "styled-components";

export const MySection = styled.section`
  padding: 8em 0;
  position: relative;
  background-color: ${(prop) => prop.bgColor};
  clip-path: ${(prop) => prop.clipPath};

  margin-top: -5%;
  @media (max-width: 480px) {
    /* padding: 9em 0;
    margin-top: -14%; */
    /* background-color: red; */
  }
  @media (max-width: 768px) {
    padding: 7em 0;
    margin-top: -12%;
  }
`;

export const SectionWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.img_first ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.img_first ? "column" : "column-reverse"};
  }
`;

export const SectionItem = styled.div`
  flex: 1;

  position: relative;
`;

export const SectionContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2em;
  height: 80vh;

  color: ${(props) => props.color};

  @media (max-width: 768px) {
  }
`;

export const SectionContentLogo = styled.div``;

export const SectionContentLogoImage = styled.img``;

export const SectionContentTitle = styled.h1`
  font-size: 4.2rem;
`;

export const SectionContentSubTitle = styled.p`
  margin-bottom: 1em;
`;

export const SectionContentPara = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
`;
export const SectionContentButton = styled.div`
  margin-top: 1em;
  align-self: flex-end;
`;

export const SectionAnimated = styled.div`
  height: 80vh;
  @media (max-width: 768px) {
    height: 95vh;
  }
`;

export const Animated = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
`;

export const AnimatedCircle = styled.div`
  background-image: ${(props) => props.bgColor};
  width: 400px;
  height: 400px;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  transition: all 0.2s ease-in;

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

export const AnimatedImage = styled.img`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(0%, 0%);
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    /* width: 70%; */
  }
`;
