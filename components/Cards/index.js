
import styles from "./cards.module.css";

export default function Card({ title, imgSrc, alt }) {
    
  return (
    <div className={styles.Cards}>
      <img src={imgSrc} alt={alt} />
      <div className={styles.bottomTitle}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
