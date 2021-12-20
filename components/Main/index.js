import Hero from "../Hero";
import Section from "../Section";
import Services from "../Section/Services";
import section from "./../Section/section-data";

console.log(section);

export default function Main() {
  return (
    <main>
      {/* <Hero /> */}
      <Section data={section.inHouse} img_first={false} />
      <Section data={section.mdyRum} img_first={true} />
      <Section data={section.meePyaTike} img_first={false} />
      <Section data={section.mApn} img_first={true} />
      {/* <Services /> */}
    </main>
  );
}
