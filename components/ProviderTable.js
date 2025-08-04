import React from "react";
import { getGameProvider } from "../utils/providerUtils";
import { getStreamableLink } from "../utils/ticketUtils";
import styles from "../styles/broadcastRefactored.module.css";

const ProviderTable = ({ game, localNatlString, activeTab }) => {
  const foxsaTable = [
    {
      providerName: "Antenna",
      channelNumber: "29.1",
    },
    {
      providerName: "Spectrum",
      channelNumber: "11",
    },
    {
      providerName: "Spectrum - HD",
      channelNumber: "11",
    },
    {
      providerName: "Dish Network",
      channelNumber: "29",
    },
    {
      providerName: "Direct TV",
      channelNumber: "29",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "11",
    },
    {
      providerName: "Grande",
      channelNumber: "11",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "11",
    },
    {
      providerName: "Youtube TV",
      channelNumber: "✅",
    },
    {
      providerName: "Hulu TV",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
  ];

  const kbvoTable = [
    ...(getStreamableLink(game)
      ? [
          {
            providerName: "Spurs App*",
            channelNumber: "STREAM LIVE",
            isStreamable: true,
            streamLink: getStreamableLink(game),
          },
        ]
      : []),
    {
      providerName: "Antenna",
      channelNumber: "14",
    },
    {
      providerName: "Spectrum",
      channelNumber: "7",
    },
    {
      providerName: "Spectrum - HD",
      channelNumber: "1215",
    },
    {
      providerName: "Grande",
      channelNumber: "18",
    },
    {
      providerName: "Grande - HD",
      channelNumber: "818",
    },
    {
      providerName: "DirecTV",
      channelNumber: "909",
    },
    {
      providerName: "DirecTV - HD",
      channelNumber: "51",
    },
    {
      providerName: "DISH Network",
      channelNumber: "51",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "7",
    },
    {
      providerName: "AT&T U-Verse - HD",
      channelNumber: "1007",
    },
    {
      providerName: "Sudden Link",
      channelNumber: "7",
    },
    {
      providerName: "Sudden Link - HD",
      channelNumber: "107",
    },
    {
      providerName: "Northland Cable",
      channelNumber: "10",
    },
    {
      providerName: "Northland Cable - HD",
      channelNumber: "101",
    },
    {
      providerName: "Youtube TV",
      channelNumber: "✅",
    },
    {
      providerName: "Hulu TV",
      channelNumber: "✅",
    },
  ];

  const ballysTable = [
    {
      providerName: "Spectrum",
      channelNumber: "26",
    },
    {
      providerName: "Spectrum - HD",
      channelNumber: "318",
    },
    {
      providerName: "DirecTV",
      channelNumber: "676",
    },
    {
      providerName: "Grande",
      channelNumber: "31",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "756",
    },
    {
      providerName: "AT&T U-Verse - HD",
      channelNumber: "1756",
    },
    {
      providerName: "Amazon Prime Video",
      channelNumber: "✅",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
    {
      providerName: "fanduelsportsnetwork.com",
      channelNumber: "✅",
      isLink: true,
      linkUrl: "https://fanduelsportsnetwork.com/",
    },
  ];

  const kensTable = [
    ...(getStreamableLink(game)
      ? [
          {
            providerName: "Spurs App",
            channelNumber: "STREAM LIVE",
            isStreamable: true,
            streamLink: getStreamableLink(game),
          },
        ]
      : []),
    {
      providerName: "Antenna",
      channelNumber: "5",
    },
    {
      providerName: "Spectrum",
      channelNumber: "5",
    },
    {
      providerName: "Spectrum - HD",
      channelNumber: "5",
    },
    {
      providerName: "DirecTV",
      channelNumber: "5",
    },
    {
      providerName: "DirecTV - HD",
      channelNumber: "5",
    },
    {
      providerName: "DISH Network",
      channelNumber: "5",
    },
    {
      providerName: "DISH Network - HD",
      channelNumber: "8471",
    },
    {
      providerName: "Grande",
      channelNumber: "5",
    },
    {
      providerName: "Grande - HD",
      channelNumber: "805",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "5",
    },
    {
      providerName: "AT&T U-Verse - HD",
      channelNumber: "1005",
    },
    {
      providerName: "YouTube TV",
      channelNumber: "✅",
    },
    {
      providerName: "Hulu TV",
      channelNumber: "✅",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
    {
      providerName: "KENS App",
      channelNumber: "✅",
    },
  ];

  const cwTable = [
    ...(getStreamableLink(game)
      ? [
          {
            providerName: "Spurs App",
            channelNumber: "STREAM LIVE",
            isStreamable: true,
            streamLink: getStreamableLink(game),
          },
        ]
      : []),
    {
      providerName: "Antenna",
      channelNumber: "4.2",
    },
    {
      providerName: "Spectrum",
      channelNumber: "7",
    },
    {
      providerName: "Spectrum - HD*",
      channelNumber: "7",
    },
    {
      providerName: "Direct TV",
      channelNumber: "35",
    },
    {
      providerName: "Direct TV Stream",
      channelNumber: "35",
    },
    {
      providerName: "DISH Network",
      channelNumber: "35",
    },
    {
      providerName: "Grande",
      channelNumber: "7",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "7",
    },
    {
      providerName: "YouTube TV",
      channelNumber: "✅",
    },
    {
      providerName: "Hulu TV",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
  ];

  const espnTable = [
    {
      providerName: "Spectrum",
      channelNumber: "24",
    },
    {
      providerName: "Spectrum HD",
      channelNumber: "300",
    },
    {
      providerName: "DirecTV",
      channelNumber: "206",
    },
    {
      providerName: "Grande",
      channelNumber: "28",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "602",
    },
    {
      providerName: "AT&T U-Verse HD",
      channelNumber: "1602",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
  ];

  const abcTable = [
    {
      providerName: "Spectrum",
      channelNumber: "13",
    },
    {
      providerName: "Spectrum HD",
      channelNumber: "1200",
    },
    {
      providerName: "DirecTV",
      channelNumber: "12",
    },
    {
      providerName: "Grande",
      channelNumber: "28",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "12",
    },
    {
      providerName: "AT&T U-Verse HD",
      channelNumber: "1012",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
    {
      providerName: "Antenna",
      channelNumber: "12.1",
    },
  ];

  const tntTable = [
    {
      providerName: "Spectrum",
      channelNumber: "27",
    },
    {
      providerName: "Spectrum HD",
      channelNumber: "103",
    },
    {
      providerName: "DirecTV",
      channelNumber: "245",
    },
    {
      providerName: "Grande",
      channelNumber: "51",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "108",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "1108",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
  ];

  const nbatvTable = [
    {
      providerName: "Spectrum",
      channelNumber: "308",
    },
    {
      providerName: "Spectrum HD",
      channelNumber: "308",
    },
    {
      providerName: "DirecTV",
      channelNumber: "216",
    },
    {
      providerName: "Grande",
      channelNumber: "225",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "632",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "1632",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
  ];

  const kvueAustin = [
    {
      providerName: "Spectrum",
      channelNumber: "3",
    },
    {
      providerName: "Spectrum HD",
      channelNumber: "1003",
    },
    {
      providerName: "DirecTV",
      channelNumber: "24",
    },
    {
      providerName: "Grande",
      channelNumber: "3",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "3",
    },
    {
      providerName: "AT&T U-Verse",
      channelNumber: "1003",
    },
    {
      providerName: "DirecTV Stream",
      channelNumber: "✅",
    },
    {
      providerName: "Fubo",
      channelNumber: "✅",
    },
    {
      providerName: "Antenna",
      channelNumber: "12.1",
    },
  ];

  let provider = "";
  let providerTable = "";

  // Add safety check for game data
  if (!game || !game.providers) {
    return null;
  }

  const gameProvider = getGameProvider(game, activeTab);
  if (!gameProvider) {
    return null;
  }

  if (localNatlString == "local") {
    console.log("local", gameProvider);
    provider = gameProvider["localBroadcast"];
    if (provider === "KBVO") {
      providerTable = kbvoTable;
    } else if (provider == "KENS") {
      providerTable = kensTable;
    } else if (provider == "CWSA") {
      providerTable = cwTable;
    } else if (provider == "FOXSA") {
      providerTable = foxsaTable;
    } else if (provider == "FANDUEL") {
      providerTable = ballysTable;
    } else if (provider == "KVUE") {
      providerTable = kvueAustin;
    } else if (provider == "ESPN") {
      providerTable = espnTable;
    }
  } else if (localNatlString == "natl") {
    console.log("natl", gameProvider);
    provider = gameProvider["natlBroadcast"];
    if (provider == "ESPN") {
      providerTable = espnTable;
    } else if (provider == "ABC") {
      providerTable = abcTable;
    } else if (provider == "TNT") {
      providerTable = tntTable;
    } else if (provider == "NBATV") {
      providerTable = nbatvTable;
    }
  }

  const formatProviderTable = (array) => {
    return (
      <>
        <div className={styles.providerTable}>
          {array.map((item) => (
            <div
              key={item.providerName}
              className={styles.providerTableItem}
            >
              <div className={styles.providerTableProviderName}>
                {item.providerName}
              </div>
              <div className={styles.providerTableChannelNumber}>
                {item.channelNumber}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      {/* if NBATV then san antonio/austin will black out and not show, but Other tab will show. If Leaguepass is the provider, show empty space. In all other scenarios, show the table.*/}
      {(provider == "NBATV" && (activeTab == "austin" || activeTab == "sanAntonio")) ||
      provider == "LEAGUEPASS" ? (
        <div>
          {formatProviderTable([])}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <p className={styles.providerTableHeader}>
            {localNatlString == "local"
              ? `${gameProvider["localBroadcast"]} Channel Guide`
              : `${gameProvider["natlBroadcast"]} Channel Guide`}
          </p>
          {formatProviderTable(providerTable)}
        </div>
      )}
    </>
  );
};

export default ProviderTable;
