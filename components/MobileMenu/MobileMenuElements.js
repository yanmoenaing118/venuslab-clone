import styled from "styled-components";

export const MyMobileMenu = styled.div`
  width: 22px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 21px;
  right: 16px;

  @media screen and (max-width: 920px) {
    display: flex;
  }
`;

export const MyMobileMenuBar = styled.div`
  height: ${(props) => (props.mid ? `2px` : `3px`)};
  width: 100%;
  background-color: #fff;
`;
