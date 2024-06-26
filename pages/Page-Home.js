import Head from "next/head";
import styles from "@/styles/PageHome.module.css";
import Cards from "@/components/Cards";
import Chips from "@/components/Chips";
import React, { useState } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { NavigationBar } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import sampleEvents from "@/public/samples/events";

export default function Home() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const [filteredEvents, setFilteredEvents] = useState(sampleEvents);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filteredItems = sampleEvents.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEvents(filteredItems);
  };

  return (
    <>
      <Head>
        <title>Eco Findr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={`${styles.main}`}>
          <div className={styles.contentWrapper}>
            <img
              src={"/images/hamburgerMenu.png"}
              className={styles.menuIcon}
              width="40px"
              height="auto"
              alt="hamburger menu"
              onClick={toggleHamburgerMenu}
            />
            {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}

            <SearchBar onSearch={handleSearch} />
            <div className={styles.chipsWrapper}>
              <div className={styles.chips}>
                <Chips buttonText={"Biking"} />
                <Chips buttonText={"Outdoor"} />
                <Chips buttonText={"Beach"} />
                <Chips buttonText={"Hike"} />
                <Chips buttonText={"Indoor"} />
                <Chips buttonText={"Food"} />
                <Chips buttonText={"Group"} />
              </div>
            </div>
            <h3 className={styles.h3}>Upcoming Events</h3>
            <div className={styles.cards}>
              {filteredEvents.map((event) => (
                <Cards
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  time={event.time}
                  imgSrc={event.imgSrc}
                  alt={event.alt}
                />
              ))}
            </div>
          </div>
          <NavigationBar />

        </main>
      </div>
    </>
  );

};
