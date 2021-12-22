import ActiveLink from "../ActiveLink";
import { ButtonPrimary } from "../Button";
import { MyNavigation, MyNavigationList } from "./NavigationElements";
import Link from "next/link";

export default function Navigation() {
  return (
    <MyNavigation>
      <MyNavigationList>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>

        <li>
          <Link href="/portfolio">
            <a>Portfolios</a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>

        <li>
          <ButtonPrimary>request a quote</ButtonPrimary>
        </li>
      </MyNavigationList>
    </MyNavigation>
  );
}
