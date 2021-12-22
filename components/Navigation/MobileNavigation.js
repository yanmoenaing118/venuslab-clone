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
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>

        <li>
          <Link href="/portfolios">
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
      </MobileNavList>
      <MobileRequest>request a quote</MobileRequest>
    </MobileNav>
  );
}
