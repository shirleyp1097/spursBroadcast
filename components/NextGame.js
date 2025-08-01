import React from "react";
import { HomeAwayBorder, MyButton, Tabs, ProviderTable } from "./";
import { getGameProvider, isLeaguePassGame, getBroadcastCard } from "../utils/providerUtils";
import { getGameDate, getGameTime, getGameDayOfTheWeek, areSpursHome, getAwayTeam, getHomeTeam, getAwayTeamFullName, getHomeTeamFullName } from "../utils/gameUtils";
import Card from "./Card.js";
import styles from "../styles/broadcastRefactored.module.css";

const NextGame = ({ game, nextSpursGames, activeTab, handleTabClick, nextGameCardHeightWidthValue }) => {
  if (nextSpursGames.length >= 1) {
    return (
      <>
        <div className={styles.headerTextDiv}>
          <p>Next Game</p>
        </div>
        <div className={styles.nextGameCardAndTableDiv}>
          <div className={styles.nextGameCardDiv}>
            <HomeAwayBorder game={game} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingRight: "1rem",
                paddingLeft: "1rem",
                gap: "1.5rem",
              }}
            >
              <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                <p style={{ fontSize: "1.5rem" }}>
                  {getGameDayOfTheWeek(game)}
                </p>
                <p className={styles.nextGameDateText}>{getGameDate(game)}</p>
                <p>{getGameTime(game)}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card
                  teamName={
                    areSpursHome(game) ? getAwayTeam(game) : getHomeTeam(game)
                  }
                  border={true}
                  heightWidthValue={nextGameCardHeightWidthValue}
                />
                <p style={{ fontSize: "1.5rem" }}>
                  {areSpursHome(game)
                    ? getAwayTeamFullName(game)
                    : getHomeTeamFullName(game)}
                </p>
              </div>
            </div>
            <hr style={{ marginTop: "1rem" }} />
            <div>
              <p>WHERE TO WATCH</p>
              <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "2rem",
                  marginLeft: "2rem",
                }}
              >
                {getBroadcastCard(game, nextGameCardHeightWidthValue, activeTab)}
              </div>
              {areSpursHome(game) && !isLeaguePassGame(game, activeTab) && (
                <div>
                  <hr />
                  <div>
                    <MyButton
                      game={game}
                      buttonType="game"
                      text="BUY TICKETS"
                    />
                  </div>
                </div>
              )}
              {isLeaguePassGame(game, activeTab) && !areSpursHome(game) && (
                <div>
                  <hr />
                  <div>
                    <MyButton
                      buttonType="leaguePass"
                      text="BUY LEAGUE PASS"
                    />
                  </div>
                </div>
              )}
              {areSpursHome(game) && isLeaguePassGame(game, activeTab) && (
                <div>
                  <hr />
                  <div style={{ gap: "3rem" }}>
                    <MyButton
                      game={game}
                      buttonType="game"
                      text="BUY TICKETS"
                    />
                    <MyButton
                      buttonType="leaguePass"
                      text="BUY LEAGUE PASS"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {(() => {
            const gameProvider = getGameProvider(game, activeTab);
            return (
              <>
                {gameProvider && gameProvider["localBroadcast"] && (
                  <div><ProviderTable game={game} localNatlString="local" activeTab={activeTab} /></div>
                )}
                {gameProvider && gameProvider["natlBroadcast"] && (
                  <div><ProviderTable game={game} localNatlString="natl" activeTab={activeTab} /></div>
                )}
              </>
            );
          })()}
        </div>
      </>
    );
  } else
    return (
      <>
        <div className={styles.headerTextDiv} style={{ height: "50vh" }}>
          <p>No upcoming matchups. See you next season!</p>
          <MyButton buttonType="home" text="HOME" />
          <MyButton buttonType="bestOf" text="LATEST VIDEOS" />
        </div>
      </>
    );
};

export default NextGame; 