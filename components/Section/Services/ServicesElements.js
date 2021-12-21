import styled from "styled-components";

export const ServicesSection = styled.section`
  /* margin-top: -4%; */
  padding: 8rem 0;
  background-image: url("https://www.venuslab.co/images/home-banner.jpg");

  background-size: cover;
  background-repeat: no-repeat;
`;

export const ServicesSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesSectionHeaderH2 = styled.h1`
  color: rgba(var(--primary));
  font-size: 2.8rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MyServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  grid-gap: 3em;
  margin-top: 4em;
`;

export const MyServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3em 3em;
`;
export const MyServiceItemTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  margin: 1.3em 0 0.8em 0;
  text-align: center;
`;

export const MyServiceItemImage = styled.div`
  width: 46%;
  height: auto;
`;

export const MyServiceItemPara = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  padding: 0 0.6em;
`;

export const LetTalk = styled.div`
  margin: auto;
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5em;

  width: 50%;
`;

export const LetTalkH1 = styled.h1`
  font-size: 5rem;
  color: rgba(var(--primary));
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const LetTalkPara = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  margin: 0.8em 0 1.2em 0;
  padding: 0 4em;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
