// Provider utilities for broadcast refactored component
// Provider logic and broadcast card functions

import { PROVIDER_OBJ, KVUE_DATES, KBVO_DATES } from "./constants";
import Card from "../components/Card.js";

export const getGameProvider = (game, activeTab) => {
  let homeOrAway = game.home.ta === "SAS" ? "home" : "away";
  let broadcasts = game.providers;
  let localBroadcast = "";
  let localBroadcastFullName = "";
  let natlBroadcast = "";
  
  try {
    if (broadcasts.length > 1000) {
      throw new Error("Broadcasts array is much too large");
    }
  } catch (error) {
    console.error("Invalid broadcasts data:", error.message);
    return {
      localBroadcast: "",
      natlBroadcast: "",
      localBroadcastFullName: "",
    };
  }
  
  for (let i = 0; i < broadcasts.length; i++) {
    let broadcast = broadcasts[i];
    if (
      broadcast["broadcasterScope"] === homeOrAway &&
      broadcast["broadcasterMedia"] === "tv"
    ) {
      localBroadcastFullName = broadcast["broadcasterDisplay"].toUpperCase();
      localBroadcast = broadcast["broadcasterDisplay"].toUpperCase();
    }

    if (
      broadcast["broadcasterScope"] === "natl" &&
      broadcast["broadcasterMedia"] === "tv"
    ) {
      natlBroadcast = broadcast["broadcasterDisplay"].toUpperCase();
    }
  }

  let gameDate = new Date(game.easternTime);
  let formattedDate =
    gameDate.getMonth() +
    1 +
    "/" +
    gameDate.getDate() +
    "/" +
    gameDate.getFullYear().toString().slice(-2);

  if (localBroadcastFullName == "KENS (ENGLISH) / KNIC (SPANISH)") {
    localBroadcast = "KENS";
    localBroadcastFullName = "KENS";
  } else if (localBroadcastFullName == "BALLY SPORTS SW-SA") {
    localBroadcastFullName = "BALLY SPORTS";
  } else if (localBroadcastFullName == "CW35") {
    localBroadcastFullName = "CWSA";
  } 

  if (activeTab == "austin") {
    if (
      localBroadcast == "KENS" ||
      localBroadcast == "KENS (ENGLISH) / KNIC (SPANISH)" ||
      localBroadcast == "CW35" ||
      localBroadcast == "CWSA" ||
      localBroadcast == "CW35 (ENGLISH) / KNIC (SPANISH)" ||
      localBroadcast == "FOXSA"
    ) {
      // Check if today matches KVUE or KBVO dates
      if (KVUE_DATES.includes(formattedDate)) {
        localBroadcast = "KVUE";
        localBroadcastFullName = "KVUE";
      } else if (KBVO_DATES.includes(formattedDate)) {
        localBroadcast = "KBVO";
        localBroadcastFullName = "KBVO";
      } else {
        localBroadcast = ""; // Default if no match
        localBroadcastFullName = "";
      }
    }
  } else if (activeTab == "other") {
    localBroadcast = "";
    if (natlBroadcast == "") {
      natlBroadcast = "LEAGUEPASS";
    }
  }

  const normalizedNatlBroadcast = Object.keys(PROVIDER_OBJ).find(
    key => key.toLowerCase() === natlBroadcast.toLowerCase()
  );

  if (natlBroadcast.toLowerCase() === "abc/espn/espn2/espn+/disney+".toLowerCase()) {
    localBroadcast = "ESPN";
    localBroadcastFullName = "ESPN";
  }

  return {
    localBroadcast: PROVIDER_OBJ[localBroadcast],
    natlBroadcast: PROVIDER_OBJ[normalizedNatlBroadcast],
    localBroadcastFullName: localBroadcastFullName,
  };
};

export const isLeaguePassGame = (game, activeTab) => {
  return (
    activeTab == "other" &&
    getGameProvider(game, activeTab).natlBroadcast == "LEAGUEPASS"
  );
};

export const getBroadcastCard = (game, heightWidthValue, activeTab) => {
  const localBroadcast = getGameProvider(game, activeTab)["localBroadcast"];
  const natlBroadcast = getGameProvider(game, activeTab)["natlBroadcast"];

  if (activeTab === "sanAntonio" || activeTab === "austin") {
    //If NBATV, then San Antonio / Austin viewers won't be able to watch
    if (natlBroadcast == "NBATV") {
      return (
        <>
          {localBroadcast && (
            <Card
              broadcastName={localBroadcast}
              heightWidthValue={heightWidthValue}
            />
          )}        
        </>
      );
    } else {
      return (
        <>
          {localBroadcast && (
            <Card
              broadcastName={localBroadcast}
              heightWidthValue={heightWidthValue}
            />
          )}
          {natlBroadcast && (
            <Card
              broadcastName={natlBroadcast}
              heightWidthValue={heightWidthValue}
            />
          )}
        </>
      );
    }
  } else if (activeTab === "other") {
    return (
      <>
        {natlBroadcast && (
          <Card
            broadcastName={natlBroadcast}
            heightWidthValue={heightWidthValue}
          />
        )}
      </>
    );
  }
}; 