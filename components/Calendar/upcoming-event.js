import React from "react";
import styles from "./Calendar.module.css";

const events = [
    { date: "April 27th", event: "Biking", location: "West Vancouver V7J 1H9" },
    { date: "May 3rd", event: "Hiking", location: "North Vancouver V7J 1H9" },
    { date: "May 20th", event: "Biking", location: "Burnaby V7J 1H9" },
];

const UpcomingEvent = () => {
    return (
        <div className={styles.box}>
            {events.map((event, index) => (
                <div key={index} className={styles.event}>
                    <div className={styles.info}>
                        <div className={styles.date}>
                            <span>Date: {event.date}</span>
                            <span>Event: {event.event}</span>
                        </div>
                        <span>Location: {event.location}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingEvent;