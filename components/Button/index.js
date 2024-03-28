import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, buttonColor, textColor }) => {
  const defaultButtonColor = 'var(--darkButton)';
  const defaultTextColor = 'var(--white)';

  return (
    <button
      className={styles.button}
      style={{ backgroundColor: buttonColor || defaultButtonColor, color: textColor || defaultTextColor }}
    >
      {text}
    </button>
  );
};

export default Button;