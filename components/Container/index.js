import styled from "styled-components";

const MyContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export default function Container({ children }) {
  return <MyContainer>{children}</MyContainer>;
}
