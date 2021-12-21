import Container from "../../Container";
import ServiceItem from "./ServiceItem";

import business from "./services-data";
import { MyServicesGrid } from "./ServicesElements";
export default function MyServices() {
  return (
    <Container>
      <MyServicesGrid>
        <ServiceItem data={business.web} />
        <ServiceItem data={business.mobile} />
        <ServiceItem data={business.game} />
        <ServiceItem data={business.uiux} />
      </MyServicesGrid>
    </Container>
  );
}
