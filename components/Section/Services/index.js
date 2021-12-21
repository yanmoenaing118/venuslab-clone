import MyServices from "./MyServices";
import {
  LetTalk,
  LetTalkH1,
  LetTalkPara,
  ServicesSection,
  ServicesSectionHeader,
  ServicesSectionHeaderH2,
} from "./ServicesElements";
import { ButtonPrimary } from "../../Button";

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
      <LetTalk>
        <LetTalkH1>{"LET'S TALK"}</LetTalkH1>
        <LetTalkPara>
          {
            "Wheather you're interested in working with us or for us, we're always          happy to chat."
          }
        </LetTalkPara>
        <ButtonPrimary>request a quote</ButtonPrimary>
      </LetTalk>
    </ServicesSection>
  );
}
