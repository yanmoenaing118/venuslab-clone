import styles from "./../../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ButtonPrimary } from "../Button";
import { useState } from "react";

export default function Header() {
  const [height, setHeight] = useState(180);

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="https://www.venuslab.co/icons/logo.svg"
                width={180}
                height={90}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
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
          </ul>
          <ButtonPrimary>request a quote</ButtonPrimary>
        </nav>
      </div>
    </header>
  );
}
