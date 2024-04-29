import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "@/styles/Landing.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Findr</title>
        <meta name="description" content="Welcome to the Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={styles.appName}>
          Eco
          <br />
          Findr
        </h1>
        <div className={styles.buttonContainer}>
          <Link href="/Quiz">
            <Button className={styles.button} text="Get Started &#8594;" />
          </Link>
          <Link href="/Profile">
            <Button className={styles.buttonTwo} text="Tutorial" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
