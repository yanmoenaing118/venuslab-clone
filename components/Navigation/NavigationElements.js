import styled from "styled-components";

export const MyNavigation = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const MyNavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  li {
    margin-left: 2.8em;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 1.1rem;
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

      @media screen and (max-width: 1040px) {
        font-size: 0.85rem;
      }
    }
  }

  @media screen and (max-width: 920px) {
    display: none;
  }
`;
