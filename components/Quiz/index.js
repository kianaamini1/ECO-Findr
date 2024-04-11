import React from "react";
import { useState } from "react";
import styles from "./Quiz.module.css";

const Choices = ({ text }) => {
  return (
    <>
      <button className={styles.choices}>{text}</button>
    </>
  );
};

export function Quiz() {
  return (
    <>
      <div className={styles.setup}>
        <div className={styles.question}>
          <p>Enhance your feed by taking a short quiz.</p>
        </div>
      </div>
      <>
       
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
                Enhance your feed by taking a short quiz. 
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