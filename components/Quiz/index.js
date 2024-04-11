import React from "react";
import { useState } from "react";
import styles from "./Quiz.module.css";



const Choices = ({ text, onClick }) => {
  return (
    <>
      <button className={styles.choices} onClick={onClick}>{text}</button>
    </>
  );
  }

export function Quiz() {
  return (
    <>
      <div className={styles.setup}>
        <div className={styles.question}>
          <p>Enhance your feed by taking a short quiz. Enhance your feed by</p>
        </div>
      </div>
      <>
        <Choices text={"I'm interested"} />
        <Choices text={"I'm not interested"} />
        <Choices text={"It doesn't matter"} />
      </>
    </>
  );
}

export function QuizSetup() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleNextClick = () => {
    setShowQuiz(true);
  };

  return (
    <>
      {!showQuiz ? (
        <>
          <div className={styles.setup}>
            <div className={styles.question}>
              <p>
                Enhance your feed by taking a short quiz. Enhance your feed by
                taking a short quiz.
              </p>
            </div>
          </div>
          <div className={styles.action}>
            <button className={`${styles.setupButton} ${styles.skipButton}`}>
              Skip
            </button>
            <button
              className={`${styles.setupButton} ${styles.nextButton}`}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <Quiz />
      )}
    </>
  );
}