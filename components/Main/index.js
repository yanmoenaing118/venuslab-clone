import Hero from "../Hero";
import Section from "../Section";
import Services from "../Section/Services";
import sections from "./../Section/section-data";

export default function Main() {
  return (
    <main>
      {/* <Hero /> */}
      <Section {...sections.inHouse} img_first={false} />
      <Section {...sections.mdyRum} img_first={true} />
      <Section {...sections.meePyaTike} img_first={false} />
      <Section {...sections.mApn} img_first={true} />
      {/* <Services /> */}
    </main>
  );
}
