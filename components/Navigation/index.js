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
          <ActiveLink href="/about">
            <a>About</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/services">
            <a>Services</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/portfolio">
            <a>Portfolios</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/blog">
            <a>Blog</a>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/contact">
            <a>Contact</a>
          </ActiveLink>
        </li>

        <li>
          <ButtonPrimary>request a quote</ButtonPrimary>
        </li>
      </MyNavigationList>
    </MyNavigation>
  );
}
