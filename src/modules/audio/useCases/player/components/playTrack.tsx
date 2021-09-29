import React from "react";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { ButtonComponent } from "../../../../../shared-components/UI/Button";

export const PlayTrack = ({ playTrack }: any) => {
  const device = usePlayerDevice();

  const playMusic = () => {
    if (device === null) return;
    playTrack({ device });
  };

  return (
    <ButtonComponent play text="Play track" onClick={playMusic} color="teal" />
  );
};
