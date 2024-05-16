import Head from "next/head";
import React, { useState } from 'react';
import { NavigationBar } from "@/components/Navigation";
import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "@/styles/PageMap.module.css";
import Map from "@/components/Map";

const MapPage = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  }

  return (
    <>
      <Head>
        <title>Eco Findr</title>
        <meta name="description" content="Generated by create next app" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.container}>

          <img src={"/images/hamburgerMenu.png"}
            className={styles.menuIcon}
            width="40px"
            height="auto"
            alt="hamburger menu"
            onClick={toggleHamburgerMenu} />
          <div className={`${styles.contentWrapper} contentWrapper`}>
            {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
            <Map address="3700 Willingdon Ave, Burnaby, BC V5G 3H2" />
          </div>
          <NavigationBar />
        </div>
      </main>
    </>
  );
};

export default MapPage;