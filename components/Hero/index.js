import Container from "../Container";
import styles from "./../../styles/Hero.module.scss";
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
  return (
    <MyHero>
      <MyHeroWrapper>
        <MyHeroTextbox>
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
