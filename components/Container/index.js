import styles from "./../../styles/Container.module.scss";
export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
