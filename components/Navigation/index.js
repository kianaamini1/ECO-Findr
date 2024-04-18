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
      <Link href="/Page-Home">
        <button
          className={
            selectedButton === "location"
              ? styles.selectedButton
              : styles.button
          }
          onClick={() => handleButtonClick("location")}
        >
          <UilLocationPoint className={styles.icon} />
        </button>
      </Link>
      <Link href="/Page-Home">
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
      <Link href="/Quiz">
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