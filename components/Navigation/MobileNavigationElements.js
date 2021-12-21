import styled from "styled-components";

export const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(var(--dark), 1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.open ? `translateY(-100%)` : `translateY(0)`)};
  transition: transform 0.34s ease-in;
`;

export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 120px;

  li {
    margin-bottom: 2em;
    a {
      font-size: 1.65rem;
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const MobileRequest = styled.button`
  width: 100%;
  height: 58px;
  background-color: rgba(var(--primary), 1);
  color: rgba(var(--dark), 1);
  cursor: pointer;

  border: none;
  outline: none;
  margin-top: auto;
  text-transform: uppercase;

  font-size: 1rem;
`;
