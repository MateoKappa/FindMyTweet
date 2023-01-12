import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.scss";
import useStore from "../DataStorage.jsx";
import { useState } from "react";

export default function Maps({ long, lang }) {
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
            <Marker longitude={data.long} latitude={data.lat}>
              {console.log(data.popup)}
              <h2> {data.emotion}</h2>
              {data.popup ? (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      top: -180,
                      left: -52,
                      width: 200,
                      height: 170,
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 5,
                      boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    My name is John Wick Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit id aliquid hic saepe nemo, obcaecati quae illo fuga praesentium blanditiis ea ipsa, voluptatibus velit est cumque, culpa ipsam! Doloremque?
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      left: -3,
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
