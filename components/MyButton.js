"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { getTicketUrl } from "../utils/ticketUtils";

const MyButton = ({ buttonType, game, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoveredButtonColor = "#5e6266";
  let unhoveredButtonColor = "#bbc4cb";

  const getHref = (buttonType, game) => {
    if (buttonType == "game") {
      return getTicketUrl(game);
    } else if (buttonType == "leaguePass") {
      return "https://www.nba.com/watch/league-pass-stream?cid=nba:own:teamboufy25:display:lp:lpsub:global:t-spurs&utm_medium=owned_team-bounty&utm_source=display_na&utm_campaign=league-pass_lp-subscription&utm_content=nba:own:teamboufy25:display:lp:lpsub:global:t-spurs";
    } else if (buttonType == "bestOf") {
      return "https://www.nba.com/spurs/videos";
    } else if (buttonType == "home") {
      return "https://nba.com/spurs/";
    }
  };

  return (
    <Button
      style={{
        backgroundColor: isHovered
          ? hoveredButtonColor
          : unhoveredButtonColor,
        fontSize: "1.25rem",
        margin: "1rem",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={getHref(buttonType, game)}
    >
      {text}
    </Button>
  );
};

export default MyButton; 