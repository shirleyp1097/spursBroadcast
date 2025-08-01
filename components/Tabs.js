import React from "react";
import styles from "../styles/broadcastRefactored.module.css";

const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div>
      <div className={styles.tabHeaderDiv}>
        <button
          onClick={() => handleTabClick("sanAntonio")}
          className={`${
            activeTab == "sanAntonio"
              ? styles.activeTabHeader
              : styles.inactiveTabHeader
          } ${styles.tabHeader}`}
        >
          San Antonio
        </button>
        <button
          onClick={() => handleTabClick("austin")}
          className={`${
            activeTab == "austin"
              ? styles.activeTabHeader
              : styles.inactiveTabHeader
          } ${styles.tabHeader}`}
        >
          Austin
        </button>
        <button
          onClick={() => handleTabClick("other")}
          className={`${
            activeTab == "other"
              ? styles.activeTabHeader
              : styles.inactiveTabHeader
          } ${styles.tabHeader}`}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default Tabs; 