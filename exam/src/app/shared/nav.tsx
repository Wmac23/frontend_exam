import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <img className={navStyles.logo} src="logo.png" alt="" />
      <img className={navStyles.title} src="mypokemon.png" alt="" />
      <ul className={navStyles.menu}>
      </ul>
    </nav>
  );
}
