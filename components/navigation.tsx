"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "!!!HERE!!!" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "!!!HERE!!!" : ""}
        </li>
      </ul>
    </nav>
  );
}
