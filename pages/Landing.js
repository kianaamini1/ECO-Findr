import Button from "@/components/Button";
import styles from "@/styles/Landing.module.css";

export default function Landing() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.heading}>Eco Findr</h1>
        <Button
          className={styles.button}
          text="Get Started &#8594;"
          buttonColor="var(--clearButton)"
          textColor="var(--black)"
        />
        <Button
          text="Tutorial"
          buttonColor="var(--darkGreen)"
          textColor="var(--white)"
        />
      </main>
    </>
  );
}
