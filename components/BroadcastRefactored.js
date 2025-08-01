"use client";

// Main entry point for broadcast refactored component
// Modular architecture with separated concerns

import React, { useState, useEffect } from "react";
import { NextGame, NextGames } from "./";
import { URL } from "../utils/constants";
import styles from "../styles/broadcastRefactored.module.css";
import Script from "next/script";

const BroadcastRefactored = () => {
  // let currentDate = new Date();
  // testing !!!
  let currentDate = new Date('1/12/25');

  const [results, setResults] = useState(null);
  const [nextGamesCount, setNextGamesCount] = useState(5); // Initial value for mobile view
  const [heightWidthValue, setHeightWidthValue] = useState("10rem");
  const [nextGameCardHeightWidthValue, setNextGameCardHeightWidthValue] =
    useState("10rem");
  const [activeTab, setActiveTab] = useState("sanAntonio");

  const handleTabClick = (tabHeaderName) => {
    setActiveTab(tabHeaderName);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    // Access individual query parameters
    const regionParameter = queryParams.get("region");
    if (regionParameter == "austin") {
      setActiveTab("austin");
    } else if (regionParameter == "other") {
      setActiveTab("other");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;

      if (windowSize < 500) {
        setNextGamesCount(5);
        setHeightWidthValue("6rem");
        setNextGameCardHeightWidthValue("8rem");
      } else if (windowSize < 900 && windowSize >= 500) {
        setNextGamesCount(6);
        setHeightWidthValue("10rem");
        setNextGameCardHeightWidthValue("10rem");
      } else if (windowSize >= 900) {
        setNextGamesCount(6);
        setHeightWidthValue("10rem");
        setNextGameCardHeightWidthValue("12rem");
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set nextGameCount based on the current width
    handleResize();

    // Cleanup function
    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setResults(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (results === null) {
    // Handle loading state
    return <p>Loading...</p>;
  }

  const allGames = results.results.schedule;
  const nextSpursGames = allGames.filter((game) => {
    if (!game || !game.easternTime) {
      return false;
    }
    const gameDate = new Date(game["easternTime"]);
    gameDate.setMinutes(gameDate.getMinutes() + 30);
    gameDate.setHours(gameDate.getHours() + 8); //5 extra hours are needed to convert from UTC time to CST, an extra 3.5 are added so a currently running game will be shown rather than the upcoming one
    return currentDate < gameDate;
  });

  return (
    <div>
      <div id="nba-nav" data-team="spurs" data-hasAds="false"></div>
      <div className={styles.pageDiv}>
        <div className={styles.content}>
          {nextSpursGames.length > 0 && (
            <NextGame 
              game={nextSpursGames[0]} 
              nextSpursGames={nextSpursGames}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              nextGameCardHeightWidthValue={nextGameCardHeightWidthValue}
            />
          )}
          {nextSpursGames.length > 0 && (
            <NextGames 
              nextSpursGames={nextSpursGames}
              nextGamesCount={nextGamesCount}
              heightWidthValue={heightWidthValue}
              activeTab={activeTab}
            />
          )}
        </div>
      </div>
      <div id="nba-footer" data-team="spurs" data-hasAds="false"></div>
      <Script src="https://www.nba.com/_teams/include/embed.js" />
      <div id="nba-analytics" data-team="spurs"></div>
      <Script src="https://www.nba.com/_teams/include/analytics.js" />
    </div>
  );
};

export default BroadcastRefactored; 