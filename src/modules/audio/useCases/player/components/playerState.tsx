import React, { useMemo } from "react";

import { usePlaybackState } from "react-spotify-web-playback-sdk";

import { useSetRecoilState } from "recoil";

import { PlayerController } from "../controller";

export const PlayerState = () => {
  const playbackState = usePlaybackState();

  const setCurrentPlaying = useSetRecoilState(
    PlayerController.state.setCurrentPlaying
  );

  if (playbackState === null) return <></>;

  setCurrentPlaying(playbackState?.track_window.current_track.name || "");

  // useMemo(() => {
  //   if (playbackState !== null) {
  //     console.log(playbackState?.position);
  //   }
  // }, [playbackState?.position]);

  return <></>;
};
