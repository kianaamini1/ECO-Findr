import React from "react";
import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards({ title, location, date, time, imgSrc, alt }) {
  return (
    <div className={styles.Cards}>
      <img className={styles.cardImage} src={imgSrc} alt={alt} />
      <div className={styles.cardInfo}>
        <div className={styles.headInfo}>
          <h2 className={styles.h2}>{title}</h2>
          <Link href="#">
            <button className={styles.joinButton}>JOIN</button>
          </Link>
        </div>
        <p className={styles.description}>
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
        </p>
        <div className={styles.generalInfo}>
          <div className={`${styles.location} ${styles.item}`}>
            <span>Location: </span>
            <span>{location}&nbsp;</span>
          </div>
          <div className={`${styles.date} ${styles.item}`}>
            <span>Date: </span>
            <span>{date}&nbsp;</span>
          </div>
          <div className={`${styles.time} ${styles.item}`}>
            <span>Time: </span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}