// Ticket utilities for broadcast refactored component
// Ticket URL and stream link functions

import { TICKET_LINKS, STREAM_DEEP_LINKS } from "./constants";

export const getTicketUrl = (game) => {
  const gameDate = new Date(game.easternTime);
  let index = 0;
  while (index <= TICKET_LINKS.length - 1) {
    let ticketDate = new Date(TICKET_LINKS[index]["date"]);
    if (
      gameDate.getDate() == ticketDate.getDate() &&
      gameDate.getMonth() == ticketDate.getMonth()
    ) {
      return TICKET_LINKS[index]["url"];
    }
    index += 1;
  }
  return "";
};

export const getStreamableLink = (game) => {
  const gameDate = new Date(game.easternTime);
  let index = 0;
  while (index <= STREAM_DEEP_LINKS.length - 1) {
    let streamDate = new Date(STREAM_DEEP_LINKS[index]["date"]);
    if (
      gameDate.getDate() == streamDate.getDate() &&
      gameDate.getMonth() == streamDate.getMonth()
    ) {
      return STREAM_DEEP_LINKS[index]["streamUrl"];
    }
    index += 1;
  }
  return "";
}; 