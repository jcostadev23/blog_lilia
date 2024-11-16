"use client";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeIconOutlined from "@mui/icons-material/HomeOutlined";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./planetMenu.module.css";

const PlanetMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log("backgroundColor");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ul className={`${styles.menu} ${menuOpen ? "open" : ""}`}>
      <div
        className={`${styles.toggle} ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        {" "}
      </div>
      <Image src="/images/logo.jpg" alt="logo" height={75} width={75} />
      <li style={{ "--i": 0 } as React.CSSProperties}>
        <a className="flex gap-2" href="/">
          <HomeIconOutlined fontSize="medium" />
        </a>
      </li>
      <li style={{ "--i": 1 } as React.CSSProperties}>
        <a className="flex gap-2" href="/users/works">
          <PeopleOutlineOutlinedIcon fontSize="medium" />
        </a>
      </li>
      <li style={{ "--i": 2 } as React.CSSProperties}>
        <a className="flex gap-2" href="/users">
          <InfoOutlinedIcon fontSize="medium" />
        </a>
      </li>
      <li style={{ "--i": 3 } as React.CSSProperties}>
        <a className="flex gap-2" href="/users">
          <Person2OutlinedIcon fontSize="medium" />
        </a>
      </li>
      <li style={{ "--i": 4 } as React.CSSProperties}>
        <a className="flex gap-2" href="/error">
          <SettingsOutlinedIcon fontSize="medium" />
        </a>
      </li>
      <div className="indicador"></div>
    </ul>
  );
};

export default PlanetMenu;
