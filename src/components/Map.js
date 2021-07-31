import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map(props) {
  return props.launchPads ? (
    <MapContainer
      center={[37.937141, -100.309096]}
      zoom={5}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      ,
      {props.launchPads.map((launchPad) => {
        const point = [
          launchPad["location"].latitude,
          launchPad["location"].longitude,
        ];

        return (
          <Marker position={point} key={launchPad["id"]}>
            <Popup>
              <p class="landpad-details"></p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  ) : (
    "Data is loading..."
  );
}
