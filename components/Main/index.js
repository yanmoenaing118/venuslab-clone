import Hero from "../Hero";
import Section from "../Section";
import section from "./../Section/section-data";

console.log(section);

export default function Main() {
  return (
    <main>
      <Hero />
      <Section data={section.inHouse} img_first={false} />
    </main>
  );
}
