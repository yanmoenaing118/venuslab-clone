import Container from "../Container";
import styles from "./../../styles/Section.module.scss";

export default function Section({ data, img_first }) {
  return (
    <section className={styles.section}>
      <Container>
        <div
          className={styles.section_wrapper}
          style={{
            flexDirection: `${img_first ? "row-reverse" : "row"}`,
          }}
        >
          <article className={styles.section_article}>
            <div className={styles.section_content}>
              <div>
                <img src={data.logo} alt={`${data.title}`} />
              </div>
              <h2>{data.title}</h2>
              <span>{data.subtitle}</span>
              <p>{data.para}</p>
            </div>
          </article>
          <article className={styles.section_article}></article>
        </div>
      </Container>
    </section>
  );
}
