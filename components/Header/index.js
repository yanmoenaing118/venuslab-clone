import Link from "next/link";
import Image from "next/image";
import { MyHeader, MyHeaderLogo, MyHeaderWrapper } from "./HeaderElements";
import Navigation from "../Navigation";
import MobileMenu from "../MobileMenu";
import { useSelector } from "react-redux";

export default function Header() {
  const open = useSelector((state) => state.menu.open);

  return (
    <MyHeader>
      <MyHeaderWrapper>
        <MyHeaderLogo open={open}>
          <Link href="/">
            <a>
              <Image
                src="https://www.venuslab.co/icons/logo.svg"
                width={180}
                height={90}
                alt="Venuslab Logo"
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
