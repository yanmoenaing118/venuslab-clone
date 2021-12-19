import { ButtonSecondary } from "../Button";
import Container from "../Container";
import styles from "./../../styles/Section.module.scss";

export default function Section({ data, img_first }) {
  const clipPath = img_first
    ? "polygon(0 0, 100% 8%, 100% 92%, 0 100%)"
    : "polygon(0 8%, 100% 0, 100% 100%, 0 92%)";

  console.log(clipPath);
  return (
    <section
      className={styles.section}
      style={{
        backgroundColor: data.bgColor,
        clipPath: clipPath,
      }}
    >
      <Container>
        <div
          className={styles.section_wrapper}
          style={{
            flexDirection: `${img_first ? "row-reverse" : "row"}`,
          }}
        >
          <article
            className={`${styles.section_article} ${styles.section_article_content} `}
          >
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
          </article>
          <article className={styles.section_article}></article>
        </div>
      </Container>
    </section>
  );
}
