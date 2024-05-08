import Head from "next/head";
import React, { useState } from 'react';
import { NavigationBar } from "@/components/Navigation";
import styles from "@/styles/LearnMore.module.css";
import HamburgerMenu from "@/components/HamburgerMenu";
import DoughnutChart from "@/components/DonutChart";
import Pie from "@/components/PieChart";

const LearnMore = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setShowHamburgerMenu(!showHamburgerMenu);
    };

    return (
        <>
            <div className={styles.container}>
            <Head>
                <title>Eco Findr</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} `}>
                <img src={"/images/hamburgerMenu.png"}
                    className={styles.menuIcon}
                    width="40px"
                    height="auto"
                    alt="hamburger menu"
                    onClick={toggleHamburgerMenu} />
                {showHamburgerMenu && <HamburgerMenu closeMenu={toggleHamburgerMenu} />}
                <h2>Charts</h2>   
                    <div className={styles.chartsWrapper}>
                        <div className={styles.doughnutChart} >
                        <h4>Environmental Engagement in Canada</h4>
                            <DoughnutChart />
                        </div>
                        <div className={styles.pieChart} >
                            <h4>Single-use plastics in Canada</h4>
                            <Pie />
                        
                        </div>
                    </div>
                    <NavigationBar />
            </main>
            </div>
        </>
    );
};

export default LearnMore;