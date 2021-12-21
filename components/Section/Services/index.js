import MyServices from "./MyServices";
import {
  ServicesSection,
  ServicesSectionHeader,
  ServicesSectionHeaderH2,
} from "./ServicesElements";

export default function Services() {
  return (
    <ServicesSection>
      <ServicesSectionHeader>
        <ServicesSectionHeaderH2>WHAT WE CAN DO</ServicesSectionHeaderH2>
        <ServicesSectionHeaderH2>
          FOR YOU OR YOUR BUSINESS
        </ServicesSectionHeaderH2>
      </ServicesSectionHeader>
      <MyServices />
    </ServicesSection>
  );
}
