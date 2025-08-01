import React from "react";
import { areSpursHome } from "../utils/gameUtils";
import styles from "../styles/broadcastRefactored.module.css";

const HomeAwayBorder = ({ game }) => {
  if (areSpursHome(game)) {
    return (
      <div className={`${styles.homeAwayBorderDiv} ${styles.homeBorderDiv}`}>
        <p>HOME</p>
      </div>
    );
  } else {
    return (
      <div className={`${styles.homeAwayBorderDiv} ${styles.awayBorderDiv}`}>
        <p>AWAY</p>
      </div>
    );
  }
};

export default HomeAwayBorder; 