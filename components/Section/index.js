import { useEffect, useRef } from "react";
import { ButtonSecondary } from "../Button";
import Container from "../Container";
import styles from "./../../styles/Section.module.scss";
import {
  Animated,
  AnimatedCircle,
  AnimatedImage,
  MySection,
  SectionAnimated,
  SectionContent,
  SectionContentLogo,
  SectionContentLogoImage,
  SectionContentPara,
  SectionContentSubTitle,
  SectionContentTitle,
  SectionItem,
  SectionWrapper,
  SectionContentButton,
} from "./SectionElements";

export default function Section({ data, img_first }) {
  const clipPath = img_first
    ? "polygon(0 0, 100% 6%, 100% 94%, 0 100%)"
    : "polygon(0 6%, 100% 0, 100% 100%, 0 94%)";

  const animatedElRef = useRef();

  let currentY = 0;
  let previousY = 0;
  let previousRatio = 0;

  let tX = 0;
  let tY = 0;

  const observerOpts = {
    threshold: [
      0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
      0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43,
      0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55,
      0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67,
      0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
      0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91,
      0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
    ],
  };

  const observerCb = function observerCb(entries) {
    entries.forEach((entry) => {
      const target = entry.target;
      const circle = target.querySelector("div");
      const img = target.querySelector("img");
      const { width: boxW, height: boxH } = img.getBoundingClientRect();
      const { width, height } = target.getBoundingClientRect();
      // console.log(target.getBoundingClientRect());

      currentY = entry.boundingClientRect.y;
      const isIntersecting = entry.isIntersecting;
      const currentRatio = entry.intersectionRatio;

      tX = (width / 2 + boxW / 2) * currentRatio;
      tY = (height / 2 + boxH / 2) * currentRatio;

      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          console.log("Scrolling down enter");
        } else {
          tX = width / 2 + boxW / 2;
          tY = height / 2 + boxH / 2;
          console.log('"Scrolling down leave"');
        }
      } else if (currentY > previousY && isIntersecting) {
        if (currentRatio < previousRatio) {
          console.log("Scrolling up leave");
        } else {
          tX = width / 2 + boxW / 2;
          tY = height / 2 + boxH / 2;
          console.log("Scrolling up enter");
        }
      }

      previousY = currentY;
      previousRatio = currentRatio;

      if (isIntersecting) {
        circle.style.transform = `translate(-50%, -50%) scale(${currentRatio})`;
        img.style.transform = `translate(${tX}px,${tY}px)`;
      }

      console.log(`tX: ${tX}, tY: ${tY}`);
      console.log(`target: ${width}, ${height}`);
      console.log(`img: ${boxW}, ${boxH}`);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCb, observerOpts);

    observer.observe(animatedElRef.current);
  });

  return (
    <MySection bgColor={data.bgColor} clipPath={clipPath}>
      <SectionWrapper img_first={img_first}>
        <SectionItem>
          <SectionContent color={data.color}>
            <SectionContentLogo>
              <SectionContentLogoImage src={data.logo} alt={data.title} />
            </SectionContentLogo>
            <SectionContentTitle>{data.title}</SectionContentTitle>
            <SectionContentSubTitle>{data.subtitle}</SectionContentSubTitle>
            <SectionContentPara>{data.para}</SectionContentPara>
            <SectionContentButton>
              <ButtonSecondary>more</ButtonSecondary>
            </SectionContentButton>
          </SectionContent>
        </SectionItem>
        <SectionItem>
          <SectionAnimated>
            <Animated ref={animatedElRef}>
              <AnimatedCircle bgColor={data.circleBg} />
              <AnimatedImage src={data.animatedImg} alt={data.title} />
            </Animated>
          </SectionAnimated>
        </SectionItem>
      </SectionWrapper>
    </MySection>
  );
}
