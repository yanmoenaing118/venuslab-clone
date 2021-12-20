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
  SectionItem,
  SectionWrapper,
} from "./SectionElements";

export default function Section({ data, img_first }) {
  const clipPath = img_first
    ? "polygon(0 0, 100% 8%, 100% 92%, 0 100%)"
    : "polygon(0 8%, 100% 0, 100% 100%, 0 92%)";
  // ${img_first ? "row-reverse" : "row"}
  // ${img_first ? "column-reverse" : "column"}

  return (
    <MySection>
      <SectionWrapper>
        <SectionItem>
          <SectionContent>{data.para}</SectionContent>
        </SectionItem>
        <SectionItem>
          <SectionAnimated>
            <Animated>
              <AnimatedCircle />
              <AnimatedImage
                src="https://www.venuslab.co/images/case-study/inh.png"
                alt="my image"
              />
            </Animated>
          </SectionAnimated>
        </SectionItem>
      </SectionWrapper>
    </MySection>
  );
}
