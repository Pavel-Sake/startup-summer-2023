import React from "react";
import { Nav } from "../nav/Nav";
import { Logo } from "../logo/Logo";

import styles from "./styles.module.css";

function Header() {
  
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

export { Header };