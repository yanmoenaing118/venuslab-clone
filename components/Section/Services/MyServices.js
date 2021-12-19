import Container from "../../Container";
import ServiceItem from "./ServiceItem";
import styles from "./../../../styles/Section.module.scss";

import business from "./services-data";
export default function MyServices() {
  return (
    <Container>
      <div className={styles.services_gridContainer}>
        <ServiceItem data={business.web} />
        <ServiceItem data={business.mobile} />
        <ServiceItem data={business.game} />
        <ServiceItem data={business.uiux} />
      </div>
    </Container>
  );
}
