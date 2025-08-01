import React from "react";
import { HomeAwayBorder } from "./";
import { getBroadcastCard } from "../utils/providerUtils";
import { getGameDate, getGameTime, getGameDayOfTheWeek, areSpursHome, getAwayTeam, getHomeTeam } from "../utils/gameUtils";
import Card from "./Card.js";
import styles from "../styles/broadcastRefactored.module.css";

const NextGames = ({ nextSpursGames, nextGamesCount, heightWidthValue, activeTab }) => {
  if (nextSpursGames.length > 1) {
    return (
      <>
        <div className={styles.headerTextDiv}>
          <p>Upcoming Matchups</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {nextSpursGames.slice(1, nextGamesCount).map((game, index) => {
            return (
              <div className={styles.nextGamesDiv} key={index}>
                <HomeAwayBorder game={game} />
                <Card
                  teamName={
                    areSpursHome(game) ? getAwayTeam(game) : getHomeTeam(game)
                  }
                  heightWidthValue={heightWidthValue}
                />
                <div className={styles.nextGamesTextDiv}>
                  <p>{getGameDayOfTheWeek(game)}</p>
                  <p className={styles.nextGamesDateText}>
                    {getGameDate(game)}
                  </p>
                  <p>{getGameTime(game)}</p>
                </div>
                <div>{getBroadcastCard(game, heightWidthValue, activeTab)}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else return null;
};

export default NextGames; 