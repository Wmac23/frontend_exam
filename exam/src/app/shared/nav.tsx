import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <img className={navStyles.logo} src="logo.png" alt="" />
      <h2>MyPokémon</h2>
      <ul className={navStyles.menu}>
      </ul>
    </nav>
  );
}
