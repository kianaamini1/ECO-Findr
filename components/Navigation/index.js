import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import {
  UilEstate,
  UilLocationPoint,
  UilSchedule,
  UilUserCircle,
} from "@iconscout/react-unicons";

export function NavigationBar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className={styles.container}>
      <Link href="/Page-Home">
        <button
          className={
            selectedButton === "home" ? styles.selectedButton : styles.button
          }
          onClick={() => handleButtonClick("home")}
        >
          <UilEstate className={styles.icon} />
        </button>
      </Link>
      <Link href="/Map">
        <button
          className={
            selectedButton === "map"
              ? styles.selectedButton
              : styles.button
          }
          onClick={() => handleButtonClick("map")}
        >
          <UilLocationPoint className={styles.icon} />
        </button>
      </Link>
      <Link href="/Calendar">
        <button
          className={
            selectedButton === "calender"
              ? styles.selectedButton
              : styles.button
          }
          onClick={() => handleButtonClick("calender")}
        >
          <UilSchedule className={styles.icon} />
        </button>
      </Link>
      <Link href="/Profile">
        <button
          className={
            selectedButton === "profile" ? styles.selectedButton : styles.button
          }
          onClick={() => handleButtonClick("profile")}
        >
          <UilUserCircle className={styles.icon} />
        </button>
      </Link>
    </div>
  );
}