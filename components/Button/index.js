import styles from "./../../styles/Buttons.module.scss";

export const ButtonPrimary = ({ children }) => {
  return (
    <button className={`${styles.btn} ${styles.btn_primary}`}>
      {children}
    </button>
  );
};
