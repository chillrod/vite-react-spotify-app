import React, { useEffect } from "react";

import { usePlayerDevice } from "react-spotify-web-playback-sdk";

interface PlayTrackProps {
  playTrack?: any;
  isPlaying: any;
  queueChanged: {}[];
  children?: JSX.Element;
}

export const PlayTrack = ({
  playTrack,
  isPlaying,
  children,
  queueChanged,
}: PlayTrackProps) => {
  const device = usePlayerDevice();

  const playMusic = () => {
    if (device === null) return;

    playTrack({ device });
    isPlaying(true);
  };

  useEffect(() => {
    playMusic();
  }, [queueChanged]);

  return <>{children}</>;
};
