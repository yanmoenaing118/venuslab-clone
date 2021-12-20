import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.img_first ? "row-reverse" : "row")};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-direction: ${(props) =>
      props.img_first ? "column-reverse" : "column"};
  }
`;

export const ArticleContent = styled.article`
  flex: 1;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const ArticleAnimated = styled.article`
  flex: 1;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;
