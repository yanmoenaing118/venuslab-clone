import styles from "./../../../styles/Section.module.scss";

export default function ServiceItem({ data }) {
  return (
    <div className={styles.services_item}>
      <div className={styles.services_item_img}>
        <img src={data.img} alt={data.title} />
      </div>
      <h3>{data.title}</h3>

      <p>{data.para}</p>
    </div>
  );
}
