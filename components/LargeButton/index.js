import React from 'react';
import styles from './LargeButton.module.css';

const LargeButton = ({ className, text }) => {
  return (
    <button className={`${styles.largeButton} ${className}`}>
      {text}
    </button>
  );
};

export default LargeButton;