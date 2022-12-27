import * as React from "react";
import Map, {Marker} from "react-map-gl";
import styles from "./Map.module.scss";
import {useState} from "react";

export default function Maps({long, lang}) {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZGVzdGluY29mZmVlIiwiYSI6ImNsNmkyZXZ2MzA3cjMza3MydzlvNzQ1N28ifQ.DvzoxROTAMSUGAYEwH_egg";

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
        <Marker longitude={long} latitude={lang}>
          <img src="https://cdn-icons-png.flaticon.com/512/999/999105.png" />
        </Marker>
      </Map>
    </div>
  );
}
