import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderHeight } from "../../store";

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
  const dispatch = useDispatch();

  const { ref, entry } = useInView({
    threshold: [0.8, 0.9],
  });

  // useEffect(() => {
  //   if (!entry) return;
  //   console.log(entry.intersectionRatio);
  //   if (entry.intersectionRatio > 0.8) {
  //     console.log("height must be 120px");
  //     dispatch(setHeaderHeight(100));
  //   } else {
  //     dispatch(setHeaderHeight(66));
  //   }
  //   return;
  // }, [entry]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1600);
  }, []);

  return (
    <MyHero ref={ref}>
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
