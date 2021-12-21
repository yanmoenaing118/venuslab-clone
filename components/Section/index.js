import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  MySection,
  MySectionItem,
  MySectionItemContent,
  MySectionItemAnimated,
  MySectionItemAnimatedCircle,
  MySectionWrapper,
  MySectionItemAnimatedImage,
  MySectionItemContentImage,
  MySectionItemContentTitle,
  MySectionItemContentSubtitle,
  MySectionItemContentPara,
} from "./SectionElements";

export default function Section({
  title,
  subtitle,
  para,
  animatedImg,
  logo,
  circleBg,
  img_first,
  bgColor,
  color,
}) {
  const { ref, entry } = useInView({
    threshold: [
      0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
      0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43,
      0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55,
      0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67,
      0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
      0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91,
      0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
    ],
  });

  const clipPath = img_first
    ? `polygon(0 0, 100% 7%, 100% 93%, 0 100%);`
    : `polygon(0 7%, 100% 0, 100% 100%, 0 94%)`;

  let previousY = 0;
  let previousRatio = 0;

  // const [ratio, setRatio] = entry.intersectionRatio;

  useEffect(() => {
    if (!entry) return;
    const circle = entry.target.querySelector(".my-circle");
    const myImage = entry.target.querySelector(".my-image");
    console.log(myImage);
    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;

    let { width, height } = entry.target.getBoundingClientRect();
    let { width: boxW, height: boxH } = myImage.getBoundingClientRect();

    console.log(width, height);

    let tX = (width / 2 + boxW / 2) * currentRatio;
    let tY = (height / 2 + boxH / 2) * currentRatio;
    console.log(`tX: ${tX}, tY: ${tY}`);

    circle.style.transform = `translate(-50%, -50%) scale(${entry.intersectionRatio})`;
    circle.style.opacity = `${entry.intersectionRatio}`;

    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        console.log("Scrolling down enter");
        circle.style.transform = `translate(-50%, -50%) scale(1)`;
        circle.style.opacity = "1";
        tX = width / 2 + boxW / 2;
        tY = height / 2 + boxH / 2;
      } else {
        console.log("Scrolling down leave");
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) {
        console.log("Scrolling up leave");
      } else {
        console.log("Scrolling up enter");
      }
    }

    if (isIntersecting) {
      if (!img_first) {
        myImage.style.transform = `translate(-${tX}px, -${tY}px)`;
      } else {
        myImage.style.transform = `translate(${tX}px, -${tY}px)`;
      }
      // myImage.style.transform = `translate(-${tX}px, -${tY}px)`;
    }

    previousY = currentY;
    previousRatio = currentRatio;
  }, [entry]);

  // const {}

  return (
    <MySection bgColor={bgColor} clipPath={clipPath}>
      <MySectionWrapper img_first={img_first}>
        <MySectionItem>
          <MySectionItemContent>
            <div>
              <MySectionItemContentImage src={logo} alt={title} />
              <MySectionItemContentTitle color={color}>
                {title}
              </MySectionItemContentTitle>
              <MySectionItemContentSubtitle color={color}>
                {subtitle}
              </MySectionItemContentSubtitle>

              <MySectionItemContentPara color={color}>
                {para}
              </MySectionItemContentPara>
            </div>
          </MySectionItemContent>
        </MySectionItem>
        <MySectionItem>
          <MySectionItemAnimated ref={ref}>
            <MySectionItemAnimatedCircle
              className="my-circle"
              img_first={img_first}
              circleBg={circleBg}
            />
            <MySectionItemAnimatedImage
              className="my-image"
              img_first={img_first}
              bgImage={animatedImg}
            >
              {/* <img src={animatedImg} alt={title} /> */}
            </MySectionItemAnimatedImage>
          </MySectionItemAnimated>
        </MySectionItem>
      </MySectionWrapper>
    </MySection>
  );
}
