import { useEffect, useState } from "react";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoaded(true);
    }, 1600);
  }, []);

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
