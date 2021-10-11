import React, { useState } from "react";

import { Play, Pause } from "react-feather";

import {
  useSpotifyPlayer,
  SpotifyPlayer as SpotifyPlayerType,
} from "react-spotify-web-playback-sdk";
import { SetterOrUpdater } from "recoil";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { PlayTrackButton } from "./player.styles";

export const SpotifyPlayer = ({ isPlaying }: any): any => {
  const [togglePlay, setTogglePlay] = useState(true);

  const player = useSpotifyPlayer();

  const togglePlayer = (playerInstance: SpotifyPlayerType) => {
    playerInstance.togglePlay();

    setTogglePlay(!togglePlay);
    isPlaying(togglePlay);
  };

  if (player === null) return null;

  return (
    <>
      <PlayTrackButton
        onClick={() => togglePlayer(player)}
        spotleafPrimary={SpotleafColors.primary}
      >
        {togglePlay && <Play />}
        {!togglePlay && <Pause />}
      </PlayTrackButton>
    </>
  );
};
