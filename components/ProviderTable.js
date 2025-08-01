import React from "react";
import Table from "react-bootstrap/Table";
import { getGameProvider } from "../utils/providerUtils";
import { getStreamableLink } from "../utils/ticketUtils";
import styles from "../styles/broadcastRefactored.module.css";

const ProviderTable = ({ game, localNatlString, activeTab }) => {
  const foxsaTable = (
    <>
      <tbody>
        <tr>
          <td>Antenna</td>
          <td>29.1</td>
        </tr>
        <tr>
          <td>Spectrum</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Spectrum - High Definition</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Dish Network</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Direct TV</td>
          <td>29</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>11</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse</td>
          <td>11</td>
        </tr>
        <tr>
          <td>Youtube TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Hulu TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const kbvoTable = (
    <>
      <tbody>
        {getStreamableLink(game) && (
          <tr>
            <td>
              <p>Spurs App*</p>
            </td>
            <td>
              <a
                style={{ color: "#2271b1", fontSize: "1.5rem" }}
                href={getStreamableLink(game)}
              >
                STREAM LIVE
              </a>
            </td>
          </tr>
        )}
        <tr>
          <td>Antenna</td>
          <td>14</td>
        </tr>
        <tr>
          <td>Spectrum</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Spectrum - High Definition</td>
          <td>1215</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Grande - High Definition</td>
          <td>818</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>909</td>
        </tr>
        <tr>
          <td>DirecTV - High Definition</td>
          <td>51</td>
        </tr>
        <tr>
          <td>DISH Network</td>
          <td>51</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse&nbsp;</td>
          <td>7</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse&nbsp;- High Definition</td>
          <td>1007</td>
        </tr>
        <tr>
          <td>Sudden Link</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Sudden Link - High Definition</td>
          <td>107</td>
        </tr>
        <tr>
          <td>Northland Cable</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Northland Cable - High Definition</td>
          <td>101</td>
        </tr>
        <tr>
          <td>Youtube TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Hulu TV</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const ballysTable = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>26</td>
        </tr>
        <tr>
          <td>Spectrum - High Definition</td>
          <td>318</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>676-1</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>31</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse</td>
          <td>756</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse - High Definition</td>
          <td>1756</td>
        </tr>
        <tr>
          <td>Amazon Prime Video</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>
            <a
              href="https://fanduelsportsnetwork.com/"
              style={{ color: "#0000EE" }}
            >
              fanduelsportsnetwork.com
            </a>
          </td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const kensTable = (
    <>
      <tbody>
        {getStreamableLink(game) && (
          <tr>
            <td>Spurs App</td>
            <td>
              <a
                style={{ color: "#2271b1", fontSize: "1.5rem" }}
                href={getStreamableLink(game)}
              >
                STREAM LIVE
              </a>
            </td>
          </tr>
        )}
        <tr>
          <td>Antenna</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Spectrum</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Spectrum - High Definition</td>
          <td>5</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>5</td>
        </tr>
        <tr>
          <td>DirecTV - High Definition</td>
          <td>5</td>
        </tr>
        <tr>
          <td>DISH Network</td>
          <td>5</td>
        </tr>
        <tr>
          <td>DISH Network - High Definition</td>
          <td>8471</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Grande - High Definition</td>
          <td>805</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse</td>
          <td>5</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse - High Definition</td>
          <td>1005</td>
        </tr>
        <tr>
          <td>YouTube TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Hulu TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>KENS App</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const cwTable = (
    <>
      <tbody>
        {getStreamableLink(game) && (
          <tr>
            <td>Spurs App</td>
            <td>
              <a
                style={{ color: "#2271b1", fontSize: "1.5rem" }}
                href={getStreamableLink(game)}
              >
                STREAM LIVE
              </a>
            </td>
          </tr>
        )}
        <tr>
          <td>Antenna</td>
          <td>4.2</td>
        </tr>
        <tr>
          <td>Spectrum</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Spectrum - High Definition*</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Direct TV</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Direct TV Stream</td>
          <td>35</td>
        </tr>
        <tr>
          <td>DISH Network</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>7</td>
        </tr>
        <tr>
          <td>AT&amp;T U-Verse</td>
          <td>7</td>
        </tr>
        <tr>
          <td>YouTube TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Hulu TV</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const espnTable = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>24</td>
        </tr>
        <tr>
          <td>Spectrum HD</td>
          <td>300</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>206</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>28</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>602</td>
        </tr>
        <tr>
          <td>AT&T U-Verse HD</td>
          <td>1602</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const abcTable = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>13</td>
        </tr>
        <tr>
          <td>Spectrum HD</td>
          <td>1200</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>28</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>12</td>
        </tr>
        <tr>
          <td>AT&T U-Verse HD</td>
          <td>1012</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Antenna</td>
          <td>12.1</td>
        </tr>
      </tbody>
    </>
  );

  const tntTable = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Spectrum HD</td>
          <td>103</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>245</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>51</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>108</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>1108</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const nbatvTable = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>308</td>
        </tr>
        <tr>
          <td>Spectrum HD</td>
          <td>308</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>216</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>225</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>632</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>1632</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
      </tbody>
    </>
  );

  const kvueAustin = (
    <>
      <tbody>
        <tr>
          <td>Spectrum</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Spectrum HD</td>
          <td>1003</td>
        </tr>
        <tr>
          <td>DirecTV</td>
          <td>24</td>
        </tr>
        <tr>
          <td>Grande</td>
          <td>3</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>3</td>
        </tr>
        <tr>
          <td>AT&T U-Verse</td>
          <td>1003</td>
        </tr>
        <tr>
          <td>DirecTV Stream</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fubo</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Antenna</td>
          <td>12.1</td>
        </tr>
      </tbody>
    </>
  );
  
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
    provider = gameProvider["localBroadcast"];
    if (provider === "KBVO") {
      providerTable = kbvoTable;
    } else if (provider === "BALLYS") {
      providerTable = ballysTable;
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
    provider = gameProvider["natlBroadcast"];
    if (provider == "ESPN") {
      providerTable = espnTable;
    } else if (provider == "ABC") {
      providerTable = abcTable
    } else if (provider == "TNT") {
      providerTable = tntTable;
    } else if (provider == "NBATV") {
      providerTable = nbatvTable;
    }
  }

  return (
    <>
      {/* if NBATV then san antonio/austin will black out and not show, but Other tab will show. If Leaguepass is the provider, don't show. In all other scenarios, show.*/}
      {(provider == "NBATV" &&
        (activeTab == "austin" || activeTab == "sanAntonio")) ||
      provider == "LEAGUEPASS" ? null : (
        <>
          <p className={styles.preTableText}>
            {localNatlString == "local"
              ? `${
                  gameProvider["localBroadcastFullName"]
                } Channel Guide`
              : `${gameProvider["natlBroadcast"]} Channel Guide`}
          </p>
          <div style={{ fontSize: "2rem" }}>
            <Table borderless className={styles.providerTable}>
              <thead>
                <tr className="table-dark">
                  <th>PROVIDER</th>
                  <th>CHANNEL</th>
                </tr>
              </thead>
              {providerTable}
            </Table>
            {getStreamableLink(game) && activeTab == "austin" && (
              <div
                style={{
                  fontSize: "1.5rem",
                  textAlign: "left",
                  width: "20rem",
                }}
              >
                <p>
                  *Stream is only available within 75 miles of Frost Bank
                  Center
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProviderTable; 