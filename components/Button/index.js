import React from 'react';

const Button = ({ className, text, buttonColor, textColor }) => {
  return (
    <button
      className={className}
      style={{
        backgroundColor: buttonColor,
        color: textColor
      }}
    >
      {text}
    </button>
  );
};

export default Button;