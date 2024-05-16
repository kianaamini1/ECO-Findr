import Head from "next/head";
import styles from "@/styles/PageHome.module.css";
import Cards from "@/components/Cards";
import Chips from "@/components/Chips";
import React, { useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { NavigationBar } from "@/components/Navigation";

export default function Home() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>
      <Head>
        <title>Eco Findr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <div className={styles.container}>
          <img
            src={"/images/hamburgerMenu.png"}
            className={styles.menuIcon}
            width="40px"
            height="auto"
            alt="hamburger menu"
            onClick={toggleHamburgerMenu}
          />
          {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
          <div>
            <h2>Event History</h2>
          </div>
          <div className={styles.chipsWrapper}>
            <div className={styles.chips}></div>
          </div>
          <div className={styles.cards}>
            <Cards
              title="Community Clean Up"
              imgSrc="/images/Clean-Up.jpeg"
              alt="Clean-up"
            />
            <Cards title="Biking" imgSrc="/images/biking.jpeg" alt="biking" />
            <Cards
              title="Gardening"
              imgSrc="/images/gardening.jpeg"
              alt="gardening"
            />
            <Cards title="Fishing" imgSrc="/images/fishing.jpeg" alt="fishing" />
            <Cards title="Hike" imgSrc="/images/hiking.jpeg" alt="hike" />
            <Cards
              title="Baking Class"
              imgSrc="/images/baking.webp"
              alt="baking"
            />
            <Cards
              title="Swap Sale"
              imgSrc="/images/garage-sale.jpeg"
              alt="swap-sale"
            />
            <Cards title="Outdoor Yoga" imgSrc="/images/yoga.jpeg" alt="yoga" />
            <Cards
              title="Tree Planting"
              imgSrc="/images/tree-planting.jpeg"
              alt="tree-planting"
            />
            <Cards title="Picnic" imgSrc="/images/picnic.jpeg" alt="picnic" />
          </div>
          <NavigationBar />
        </div>
      </main>
    </>
  );
}
