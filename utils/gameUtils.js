// Game utilities for broadcast refactored component
// Date/time formatting and game data processing functions

export const getAwayTeam = (game) => {
  return game.visitor.ta;
};

export const getHomeTeam = (game) => {
  return game.home.ta;
};

export const getAwayTeamFullName = (game) => {
  return game.visitor.tc + " " + game.visitor.tn;
};

export const getHomeTeamFullName = (game) => {
  return game.home.tc + " " + game.home.tn;
};

export const getGameDate = (game) => {
  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  let [year, month, day] = game.easternTime.slice(0, 10).split("-");
  if (day[0] == "0") {
    day = day.slice(1);
  }
  if (month[0] == "0") {
    month = month.slice(1);
  }
  return months[month] + " " + day;
};

export const getGameTime = (game) => {
  let inputTimeSplit = game.easternTime.slice(11, -1).split(":");
  let hour = inputTimeSplit[0] - 1;
  if (hour == -1) {
    hour = 23;
  } else if (hour == 0) {
    hour = 24;
  }
  let amPm = "";
  if (hour < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  hour = hour % 12;
  let minutes = inputTimeSplit[1];
  return hour + ":" + minutes + " " + amPm + " CT";
};

export const getGameDayOfTheWeek = (game) => {
  const dayOfTheWeek = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  let gameDate = game.easternTime.slice(0, 10);
  gameDate = new Date(gameDate);
  return dayOfTheWeek[gameDate.getDay()].toUpperCase();
};

export const areSpursHome = (game) => {
  if (getHomeTeam(game) == "SAS") {
    return true;
  } else {
    return false;
  }
}; 