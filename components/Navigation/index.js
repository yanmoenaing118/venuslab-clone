import Link from "next/link";
import { ButtonPrimary } from "../Button";
import { MyNavigation, MyNavigationList } from "./NavigationElements";
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
          <Link href="/blog/hello-world">
            <a>Services</a>
          </Link>
        </li>

        <li>
          <Link href="/blog/hello-world">
            <a>Portfolios</a>
          </Link>
        </li>

        <li>
          <Link href="/blog/hello-world">
            <a>Blog</a>
          </Link>
        </li>

        <li>
          <Link href="/blog/hello-world">
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
