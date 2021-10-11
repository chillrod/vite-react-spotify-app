import React from "react";

import { usePlaybackState } from "react-spotify-web-playback-sdk";

import { useSetRecoilState } from "recoil";

import { PlayerController } from "../controller";

export const CurrentSong = () => {
  const playbackState = usePlaybackState();

  const setCurrentPlaying = useSetRecoilState(
    PlayerController.state.setCurrentPlaying
  );

  setCurrentPlaying(playbackState?.track_window.current_track.name || "");

  if (playbackState === null) return null;

  return <></>;
};
