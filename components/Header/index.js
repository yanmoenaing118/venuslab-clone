import Link from "next/link";
import Image from "next/image";
import { MyHeader, MyHeaderLogo, MyHeaderWrapper } from "./HeaderElements";
import Navigation from "../Navigation";
import MobileMenu from "../MobileMenu";

export default function Header() {
  return (
    <MyHeader>
      <MyHeaderWrapper>
        <MyHeaderLogo>
          <Link href="/">
            <a>
              <Image
                src="https://www.venuslab.co/icons/logo.svg"
                width={180}
                height={90}
              />
            </a>
          </Link>
        </MyHeaderLogo>
        <Navigation />
        <MobileMenu />
      </MyHeaderWrapper>
    </MyHeader>
  );
}
