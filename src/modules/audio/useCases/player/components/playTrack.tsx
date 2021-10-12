import React, { useEffect } from "react";

import { usePlayerDevice } from "react-spotify-web-playback-sdk";

import { PlayTrackDTO } from "../dto";

export const PlayTrack = ({
  playTrack,
  isPlaying: [getIsPlaying, setIsPlaying],
  children,
  queueChanged,
}: PlayTrackDTO) => {
  const device = usePlayerDevice();

  const playMusic = () => {
    if (device === null) return;

    playTrack({ device });
    setIsPlaying(true);
  };

  useEffect(() => {
    playMusic();
  }, [queueChanged]);

  return <>{children}</>;
};
