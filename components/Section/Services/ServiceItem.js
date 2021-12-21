import styles from "./../../../styles/Section.module.scss";
import Image from "next/image";
export default function ServiceItem({ data }) {
  return (
    <div className={styles.services_item}>
      <h1>Hello</h1>
      {/* <div className={styles.services_item_img}>
        <Image src={data.img} alt={data.title} width={300} height={280} />
      </div>
      <h3>{data.title}</h3>

      <p>{data.para}</p> */}
    </div>
  );
}
