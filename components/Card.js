import styles from "../styles/broadcastRefactored.module.css";
import React from "react";

const urls = {
  LAL: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/LALakers_Icon.png",
  NOP: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/NOPelicans_Primary_Icon.png",
  SAC: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/SKings_Primary_Icon.png",
  CLE: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/CCavaliers_Primary_Icon.png",
  MIN: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/MTimberwolves_Primary_Icon.png",
  NYK: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/NYKnicks_Primary_Icon.png",
  PHI: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/P76ers_Primary_Icon.png",
  DET: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/DPistons_Primary_Icon.png",
  SAS: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/SASpurs_Primary_Icon.png",
  UTA: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/UJazz_Primary_Icon.png",
  ATL: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/AHawks_Primary_Icon.png",
  TOR: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/TRaptors_Primary_Icon.png",
  DAL: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/DMavericks_Primary_Icon.png",
  GSW: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/GSWarriors_Primary_Icon.png",
  HOU: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/HRockets_Primary_Icon.png",
  DEN: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/DNuggets_Primary_Icon.png",
  LAC: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/LAClippers_Primary_Icon.png",
  MEM: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/MGrizzlies_Primary_Icon.png",
  BOS: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/BCeltics_Primary_Icon.png",
  BKN: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/BklynNets_Primary_Icon.png",
  CHI: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/CBulls_Primary_Icon.png",
  CHA: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/CHornets_Primary_Icon.png",
  IND: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/IPacers_Primary_Icon.png",
  MIL: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/MBucks_Primary_Icon.png",
  MIA: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/MHeat_Primary_Icon.png",
  OKC: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/OKCThunder_Primary_Icon.png",
  ORL: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/OMagic_Primary_Icon.png",
  PHX: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/PSuns_Primary_Icon.png",
  POR: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/PTrailBlazers_Primary_Icon.png",
  WAS: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/WWizards_Primary_Icon.png",
  ESPN: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/espn.png",
  CWSA: "https://cdn.nba.com/teams/uploads/sites/1610612759/2024/10/logo_woai_cw35_legal_color-blk-1.png",
  KENS: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/12/KENS-5-logo-blue.png",
  TNT: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/TNT.png",
  NBATV:
    "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/NBA_TV.webp",
  ABC: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/American_Broadcasting_Company_Logo.svg-1.png",
  LEAGUEPASS:
    "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/11/NBA_League_Pass_horiz_onDkBkgd-2-1.png",
  KBVO: "https://cdn.nba.com/teams/uploads/sites/1610612759/2023/12/KBVO_Logo_2018.webp",
  SPURSAPP:
    "https://cdn.nba.com/teams/uploads/sites/1610612759/2024/02/spurs_app.png",
  FOXSA:
    "https://cdn.nba.com/teams/uploads/sites/1610612759/2024/10/logo_kabb_fox-sa_legal_color-blk.png",
  FANDUEL:
    "https://cdn.nba.com/teams/uploads/sites/1610612759/2024/10/fanduel_logo.png",
  KVUE: "https://cdn.nba.com/teams/uploads/sites/1610612759/2024/12/KVUE-ABC.png",
};

export default function Card(props) {
  let imageUrl = "";
  let cardClass = "";
  let includedHeightWidth = false;

  if (props.teamName) {
    imageUrl = urls[props.teamName];
    cardClass = styles.teamCardDiv
  } else if (props.broadcastName) {
    imageUrl = urls[props.broadcastName];
    cardClass = styles.broadcastCardDiv
  }

  if (props.heightWidthValue) {
    includedHeightWidth = true;
  }
  const includeBorder = props.border;

  return (
    <>
      <div
        className={`${styles.cardDiv} ${
          includeBorder ? styles.border : null
        } ${cardClass}`}
        style={{
          height: includedHeightWidth ? props.heightWidthValue : "5rem",
          width: includedHeightWidth ? props.heightWidthValue : "5rem",
        }}
      >
        <img className={styles.cardImg} src={imageUrl} />
      </div>
    </>
  );
}
