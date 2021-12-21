import Link from "next/link";
import {
  MobileNav,
  MobileNavList,
  MobileRequest,
} from "./MobileNavigationElements";

import { useSelector } from "react-redux";

export default function MobileNavigation() {
  const open = useSelector((state) => state.menu.open);
  return (
    <MobileNav open={open}>
      <MobileNavList>
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
      </MobileNavList>
      <MobileRequest>request a quote</MobileRequest>
    </MobileNav>
  );
}
