import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.scss";
import useStore from "../DataStorage.jsx";
import { useState } from "react";

export default function Maps({ long, lang, setVisible }) {
  const [popUp, setPopUp] = useState(false);
  const setTweets = useStore((state) => state.setTweets);
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA";
  const tweets = useStore((state) => state.tweets);
  const popUpChecker = (data) => {
    let returnedTweet = tweets.filter((tweet) => tweet.id == data.id);
    returnedTweet[0].popup = !data.popup;
    let allTweets = tweets.filter((tweet) => tweet.id != data.id);
    allTweets.push(returnedTweet[0]);

    let allTweetsSorts = allTweets.sort((a, b) => {
      return a.id - b.id;
    });
    setTweets(allTweetsSorts);
  };

  return (
    <div className={styles.Mapstyle}>
      <Map
        initialViewState={{
          longitude: long,
          latitude: lang,
          zoom: 13,
        }}
        style={{ height: "98vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {tweets?.map((data, index) => (
          <div key={index} onClick={() => popUpChecker(data)}>
            <Marker
              longitude={data.long}
              latitude={data.lat}
              className={styles.marker}
            >
              {console.log(data.popup)}
              <h2> {data.emotion == "happy" ? "😁" : "🙁"}</h2>
              {data.popup ? (
                <div>
                  <div
                    className={styles.popup}
                    style={{
                      position: "absolute",
                      bottom: 30,
                      left: -50,
                      width: 120,
                      backgroundColor: "white",
                      padding: 10,
                      margin: "auto",
                      borderRadius: 5,
                      boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    Calling is an important song to me, as it marks the point
                    where ...{" "}
                    <button
                      style={{
                        fontSize: 10,
                        padding: "0 2px",
                      }}
                      onClick={() => setVisible(true)}
                    >
                      {" "}
                      more
                    </button>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      left: -5,
                      width: 30,
                      height: 20,
                      backgroundColor: "white",
                      clippath: "polygon(48% 72%, 0 0, 100% 0)",
                      clipPath: " polygon(48% 72%, 0 0, 100% 0)",
                      boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
                    }}
                  ></div>
                </div>
              ) : null}
            </Marker>
          </div>
        ))}
      </Map>
    </div>
  );
}
