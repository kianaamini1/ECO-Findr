import React, { useState } from "react";
import Head from "next/head";
import { QuizSetup } from "../components/Quiz";
import styles from "@/styles/QuizPage.module.css";
import Link from "next/link";

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
    answers: ["Solo", "Group", "Both"],
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleLearnMoreClick = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(true);
    }, 4000)
  };

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const generateResultText = () => {
    const resultMessages = [
      "You're passionate about outdoor solo activities! We'll personalize your feed accordingly.",
      "You enjoy outdoor adventures and group activities! We'll personalize your feed accordingly.",
      "You're passionate about indoor solo activities! We'll personalize your feed accordingly.",
      "You enjoy indoor activities and group activities! We'll personalize your feed accordingly.",
    ]

    const randomIndex = Math.floor(Math.random() * resultMessages.length);
    return resultMessages[randomIndex]
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Finder</title>
        <meta name="description" content="Welcome to the App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
      {quizCompleted ? (
          <div className={styles.textContainer}>
            
            <h1 className={styles.quizCompleted}>Quiz Completed!</h1>
            <div className={styles.setup}>
            <p>{generateResultText()}</p>
            <p>
              Continue to access your personalized feed or restart to change
              your input.
            </p>
            </div>

            <div className={styles.buttonCont}>
              <button className={styles.button}
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setUserAnswers(Array(questions.length).fill(null));
                  setQuizCompleted(false);
                  setShowLoading(false);
                  setShowAlmostDone(false);
                }}
              >
                Restart Quiz
              </button>
              <Link href="/Page-Home">
                <button className={styles.buttonTwo} onClick={handleLearnMoreClick}>Continue
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.indicatorsQuiz}>
              {questions.map((question, index) => (
      <img
              key={question.id}
              className={`${styles.quizIndicator} ${currentQuestionIndex === index ? styles.active : styles.inactive
                }
              ${index <= currentQuestionIndex ? styles.clickable : " "}`}
              src={"/images/indicator.png"}
              width="60px"
              height="auto"
              alt={`quiz indicator number ${question.id}`}
              onClick={() => {
                if (index <= currentQuestionIndex) {
                  setCurrentQuestionIndex(index);
                }
              }}
            />

              ))}
            </div>
            <div className={styles.quizCont}>
              <QuizSetup
                question={questions[currentQuestionIndex]}
                handleAnswerClick={handleAnswerClick}
              />
            </div>
          </>
        )}
        {showLoading && (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingAnimation}>
              <img src="/images/indicator.png" alt="Loading Indicator 1" />
              <img src="/images/indicator.png" alt="Loading Indicator 2" />
              <img src="/images/indicator.png" alt="Loading Indicator 3" />
            </div>
            <p>Loading...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuizPage;