import Head from "next/head";
import styles from "@/styles/SavedEvents.module.css";
import Cards from "@/components/Cards";
import React, { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "@/components/HamburgerMenu";
import { NavigationBar } from "@/components/Navigation";

export default function SavedEvents() {
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
          <div className={styles.contentWrapper}>
            <Link href="/Profile"><img
              src={"/images/back-button.png"}
              className={styles.backIcon}
              width="20px"
              height="auto"
              alt="back button"
            /></Link>
            <img
              src={"/images/hamburgerMenu.png"}
              className={styles.menuIcon}
              width="40px"
              height="auto"
              alt="hamburger menu"
              onClick={toggleHamburgerMenu}
            />
            {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
            <div className={styles.chartsWrapper}>
              <h2>Saved Events</h2>
            </div>

            <div className={styles.cards}>
              <Cards
                title="Tree Planting"
                description="Help us plant trees and contribute to the environment's well-being. Every tree makes a difference!"
                location="987 Cedar Road, Vancouver, BC"
                date="December 5th"
                time="9:00 AM"
                imgSrc="/images/tree-planting.jpeg"
                alt="tree-planting"
              />
              <Cards
                title="Gardening"
                description="Learn the joys of gardening and get your hands dirty while planting some beautiful flowers and vegetables!"
                date="September 5th"
                time="8:00 AM"
                imgSrc="/images/gardening.jpeg"
                alt="gardening"
              />

              <Cards title="Hike"
                description="Embark on a thrilling hike through scenic trails and breathtaking landscapes. Get your hiking boots ready!"
                location="6000 Cypress Bowl Road, West Vancouver"
                date="October 5th"
                time="8:00 AM"
                imgSrc="/images/hiking.jpeg" alt="hike" />

              <Cards title="Outdoor Yoga"
                description="Connect with nature and find inner peace with our outdoor yoga session. Unwind, stretch, and breathe in the fresh air!"
                location="123 Oak Avenue, Burnaby, BC"
                date="June 18th"
                time="8:00 AM"
                imgSrc="/images/yoga.jpeg" alt="yoga" />
            </div>
          </div>
          <NavigationBar />
        </div>
      </main>
    </>
  );
}
