import Link from "next/link";
import React from "react";
import SearchCity from "./components/SearchCity";
import styles from "./styles/header.styles.module.scss";

function Header() {
  return (
    <nav className={styles.header_nav}>
      <h2>Weather App</h2>
      <SearchCity />
      <ul className={styles.header_menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
