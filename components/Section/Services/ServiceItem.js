import styles from "./../../../styles/Section.module.scss";
import Image from "next/image";
import {
  MyServiceItem,
  MyServiceItemImage,
  MyServiceItemPara,
  MyServiceItemTitle,
} from "./ServicesElements";
export default function ServiceItem({ data }) {
  return (
    <MyServiceItem>
      <MyServiceItemImage>
        <Image src={data.img} alt={data.title} width={300} height={280} />
      </MyServiceItemImage>
      <MyServiceItemTitle>{data.title}</MyServiceItemTitle>
      <MyServiceItemPara>{data.para}</MyServiceItemPara>
    </MyServiceItem>
  );
}
