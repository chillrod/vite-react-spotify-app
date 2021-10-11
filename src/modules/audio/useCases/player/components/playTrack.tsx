import React from "react";
import { Play } from "react-feather";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";

import { PlayTrackButton } from "./player.styles";

interface PlayTrackProps {
  playTrack?: any;
  children?: JSX.Element;
}

export const PlayTrack = ({ playTrack, children }: PlayTrackProps) => {
  const device = usePlayerDevice();

  const playMusic = () => {
    if (device === null) return;

    playTrack({ device });
  };

  return (
    <PlayTrackButton onClick={playMusic}>
      <>
        <Play />
        {children}
      </>
    </PlayTrackButton>
  );
};
