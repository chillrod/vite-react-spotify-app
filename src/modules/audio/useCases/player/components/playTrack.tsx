import React, { useEffect } from "react";

import { usePlayerDevice } from "react-spotify-web-playback-sdk";
import { SetterOrUpdater } from "recoil";

interface PlayTrackProps {
  playTrack?: any;
  isPlaying: [boolean, SetterOrUpdater<boolean>];
  queueChanged: {}[];
  children?: JSX.Element;
}

export const PlayTrack = ({
  playTrack,
  isPlaying: [getIsPlaying, setIsPlaying],
  children,
  queueChanged,
}: PlayTrackProps) => {
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
