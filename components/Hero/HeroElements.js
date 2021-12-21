import styled from "styled-components";

export const MyHero = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(var(--dark), 0.99),
    rgba(var(--dark), 0.99)
  );
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;

export const MyHeroWrapper = styled.div`
  padding: 0 1em;
  max-width: 1300px;
  height: 100%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 920px) {
    padding: 0 3em;
  }
`;

export const MyHeroTextbox = styled.div`
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const MyHeroTitle = styled.h1`
  color: rgba(var(--primary));
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  line-height: 0.9;
  font-family: "Oswald", sans-serif;
`;

export const MyHeroTitleSmall = styled.small`
  font-weight: 100;
  font-size: 10rem;
  font-weight: 200;

  @media screen and (max-width: 920px) {
    font-size: 18vw;
    letter-spacing: -1px;
  }
`;

export const MyHeroTitleStrong = styled.strong`
  font-size: 12rem;
  font-weight: 700;
  @media screen and (max-width: 920px) {
    font-size: 20vw;
    letter-spacing: -1px;
  }
`;

export const MyHeroPara = styled.p`
  margin-top: 1em;
  color: #fff;
  font-size: 1.5rem;
  padding-left: 0.4em;

  @media screen and (max-width: 920px) {
    font-size: 1.3rem;
  }
`;
