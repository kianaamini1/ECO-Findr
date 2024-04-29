import styles from "./HamburgerMenu.module.css";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndToggle = () => {
    closeMenu();
    toggleMenu();
  };

  return (
    <>
      <div className={`${styles.hamburgerMenu} ${isOpen ? styles.open : " "}`}>
        <div className={styles.menuCancel} onClick={closeMenuAndToggle}>
          <img src={"/images/cancel.png"}
            width="20px"
            height="auto"
            alt="close menu" />
        </div>
        <div className={styles.menuCont}></div>
        <Link href="/MiniGame">
          <div className={styles.link}>Mini Game</div>
        </Link>
        <Link href="/Quiz">
          <div className={styles.link}>Quiz</div>
        </Link>
        <Link href="/Tutorial">
          <div className={styles.link}>Tutorial</div>
        </Link>
        <Link href="/LearnMore">
          <div className={styles.link}>Learn More</div>
        </Link>
        <Link href="/Settings">
          <div className={styles.link}>Settings</div>
        </Link>
        <div className={styles.hamburgerIcon} onClick={toggleMenu}></div>
      </div>
    </>
  )
};

export default HamburgerMenu;
