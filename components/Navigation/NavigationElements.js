import styled from "styled-components";

export const MyNavigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const MyNavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-right: 3.4em;
  li {
    margin-left: 2.8em;
    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 1.15rem;
      line-height: 1;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 1.3px;
        border-radius: 3px;
        background-color: #fff;
        transition: width 0.5s var(--ease);
      }

      &:hover {
        &::after {
          width: 90%;
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    display: none;
  }
`;
