import { useSelector } from "react-redux";

import {
  MyHero,
  MyHeroTextbox,
  MyHeroTitle,
  MyHeroTitleSmall,
  MyHeroTitleStrong,
  MyHeroWrapper,
  MyHeroPara,
} from "./HeroElements";
export default function Hero() {
  const loaded = useSelector((state) => state.animation.loaded);
  console.log(loaded);
  return (
    <MyHero>
      <MyHeroWrapper>
        <MyHeroTextbox loaded={loaded}>
          <MyHeroTitle>
            <MyHeroTitleSmall>Idea to</MyHeroTitleSmall>
            <MyHeroTitleStrong>Impact</MyHeroTitleStrong>
          </MyHeroTitle>

          <MyHeroPara>Risk-free mobile and web development</MyHeroPara>
        </MyHeroTextbox>
      </MyHeroWrapper>
    </MyHero>
  );
}
