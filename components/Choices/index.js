import styles from "./Choices.module.css"


const Choices = ({ text }) => {
    return (
      <button className={`${styles.choices}`}>
        {text}
      </button>
    );
  };
  
  export default Choices;