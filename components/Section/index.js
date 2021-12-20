import { ButtonSecondary } from "../Button";
import Container from "../Container";
import styles from "./../../styles/Section.module.scss";
import {
  ArticleAnimated,
  ArticleContent,
  SectionWrapper,
} from "./SectionElements";

export default function Section({ data, img_first }) {
  const clipPath = img_first
    ? "polygon(0 0, 100% 8%, 100% 92%, 0 100%)"
    : "polygon(0 8%, 100% 0, 100% 100%, 0 92%)";
  // ${img_first ? "row-reverse" : "row"}
  // ${img_first ? "column-reverse" : "column"}

  const fletDirection = "column";
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: data.bgColor,
        clipPath: clipPath,
      }}
    >
      <Container>
        <SectionWrapper img_first={img_first}>
          <ArticleContent>
            <div
              className={styles.section_content}
              style={{
                color: data.color,
              }}
            >
              <div>
                <img src={data.logo} alt={`${data.title}`} />
              </div>
              <h2>{data.title}</h2>
              <span>{data.subtitle}</span>
              <p>{data.para}</p>

              <ButtonSecondary>more</ButtonSecondary>
            </div>
          </ArticleContent>

          <ArticleAnimated>
            <div className={styles.section_animate}>
              <div className={styles.section_animate_circle}></div>
              <div className={styles.section_animate_img}>
                <img
                  src="https://www.venuslab.co/images/case-study/inh.png"
                  alt={data.title}
                />
              </div>
            </div>
          </ArticleAnimated>
        </SectionWrapper>
      </Container>
    </section>
  );
}
