import styled from "styled-components";

export const ServicesSection = styled.section`
  margin-top: -4%;
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
