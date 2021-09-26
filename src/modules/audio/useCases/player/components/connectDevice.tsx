import React from "react";

import { usePlayerDevice } from "react-spotify-web-playback-sdk";

import { ButtonComponent } from "../../../../../shared-components/UI/Button";

export const ConnectDevice = ({ getAccessToken, selectedTrack }: any) => {
  const device = usePlayerDevice();

  const playMusic = () => {
    if (device === null) return;

    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: [selectedTrack.uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
  };

  if (device === null) return null;

  return (
    <ButtonComponent play text="Play music" onClick={playMusic} color="teal" />
  );
};
