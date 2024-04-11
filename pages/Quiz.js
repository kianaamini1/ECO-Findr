import React from "react";
import Head from "next/head";
import { QuizSetup } from "../components/Quiz";
import Choices from "@/components/Choices";
import styles from "@/styles/Quiz.module.css";

const QuizPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Finder</title>
        <meta name="description" content="Welcome to the Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <QuizSetup/>
        <>
        <Choices text={"ya"}/>
        </>
        
       
     
        
      </main>
    </div>
  );
};

export default QuizPage;