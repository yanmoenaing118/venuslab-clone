import ActiveLink from "../ActiveLink";
import { ButtonPrimary } from "../Button";
import { MyNavigation, MyNavigationList } from "./NavigationElements";
export default function Navigation() {
  return (
    <MyNavigation>
      <MyNavigationList>
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about">About</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/services">Services</ActiveLink>
        </li>

        <li>
          <ActiveLink href="/portfolio">Portfolios</ActiveLink>
        </li>

        <li>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </li>

        <li>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </li>

        <li>
          <ButtonPrimary>request a quote</ButtonPrimary>
        </li>
      </MyNavigationList>
    </MyNavigation>
  );
}
