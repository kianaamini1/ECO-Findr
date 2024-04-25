import React, { useState } from "react";
import Head from "next/head";
import { QuizSetup } from "../components/Quiz";
import styles from "@/styles/Quiz.module.css";

const questions = [
  {
    id: 1,
    question: "Have you participated in any environmental events in the past?",
    answers: ["Yes", "No", "Very Few"],
  },
  {
    id: 2,
    question: "What environmental issue are you most passionate about?",
    answers: [
      "Climate Change",
      "Pollution",
      "Deforestation",
      "Water Conservation",
    ],
  },
  {
    id: 3,
    question: "Do you prefer outdoor or indoor activities?",
    answers: ["Outdoor", "Indoor", "Both"],
  },
  {
    id: 4,
    question: "Do you prefer solo or group activities?",
    answers: ["Solo", "Group"],
  },
];


const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz completed!");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Finder</title>
        <meta name="description" content="Welcome to the Quiz App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <img src="/images/image.png"></img>
        <QuizSetup
          question={questions[currentQuestionIndex]}
          handleAnswerClick={handleAnswerClick}
        />
      </main>
    </div>
  );
};

export default QuizPage;
