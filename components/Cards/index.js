import styles from './Cards.module.css';

export default function Cards({ title, imgSrc, alt }) {

  return (
    <div className={styles.Cards}>
      <img className={styles.cardImage} src={imgSrc} alt={alt} />
      <div className={styles.bottomTitle}>
        <h2 className={styles.h2}>{title}</h2>
      </div>
    </div>
  );
}
