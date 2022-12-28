import * as React from "react";
import Map, {Marker} from "react-map-gl";
import styles from "./Map.module.scss";
import useStore from "../DataStorage.jsx";
export default function Maps({long, lang}) {
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA";
  const geo = useStore((state) => state.Geo);
  console.log(geo);
  return (
    <div className={styles.Mapstyle}>
      <Map
        initialViewState={{
          longitude: long,
          latitude: lang,
          zoom: 13,
        }}
        style={{height: "88vh"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {geo[0]?.map((data, index) => (
          <div>
            {console.log("hello")}
            <Marker longitude={data.long} latitude={data.lat}>
              <h2> {data.emotion}</h2>
            </Marker>
          </div>
        ))}
      </Map>
    </div>
  );
}
