import Container from "../Container";
import styles from "./../../styles/Hero.module.scss";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_textbox}>
          <h1>
            <small>Idea to</small>
            <strong>Impact</strong>
          </h1>
          <p>Risk-free mobile and web development</p>
        </div>
      </div>
    </section>
  );
}
