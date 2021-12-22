import Link from "next/link";
import Image from "next/image";
import { MyHeader, MyHeaderLogo, MyHeaderWrapper } from "./HeaderElements";
import Navigation from "../Navigation";
import MobileMenu from "../MobileMenu";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const open = useSelector((state) => state.menu.open);
  const height = useSelector((state) => state.animation.headerHeight);

  return (
    <MyHeader open={open} height={80}>
      <MyHeaderWrapper>
        <MyHeaderLogo open={open}>
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
