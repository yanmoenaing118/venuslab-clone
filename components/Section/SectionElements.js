import styled from "styled-components";

export const MySection = styled.section`
  padding: 8em 0;
  background-color: cyan;
  border-bottom: 1px solid #ccc;
`;

export const SectionWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
`;

export const SectionItem = styled.div`
  flex: 1;
  border: 1px solid #fff;
`;

export const SectionContent = styled.div``;

export const SectionContentTitle = styled.h1``;

export const SectionSubTitle = styled.p``;

export const SectionContentPara = styled.p``;

export const SectionAnimated = styled.div``;

export const Animated = styled.div`
  background-color: white;
  position: relative;
`;

export const AnimatedCircle = styled.div`
  background-color: wheat;
  width: 400px;
  height: 400px;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AnimatedImage = styled.img`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
