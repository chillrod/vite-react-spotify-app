import React from "react";
import { SetterOrUpdater } from "recoil";

import {
  useSpotifyPlayer,
  SpotifyPlayer as SpotifyPlayerType,
} from "react-spotify-web-playback-sdk";

import { parseTogglePlay } from "../../../../../helpers/parseTogglePlay";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { PlayTrackButton } from "./player.styles";

import { Play, Pause } from "react-feather";
interface SpotifyPlayerProps {
  isPlaying: [boolean, SetterOrUpdater<boolean>];
}

export const SpotifyPlayer = ({
  isPlaying: [getIsPlaying, setIsPlaying],
}: SpotifyPlayerProps): any => {
  const player = useSpotifyPlayer();

  const togglePlayer = (playerInstance: SpotifyPlayerType) => {
    playerInstance.togglePlay();

    setIsPlaying(!getIsPlaying);
  };

  if (player === null) return null;

  return (
    <>
      <PlayTrackButton
        onClick={() => togglePlayer(player)}
        spotleafPrimary={SpotleafColors.primary}
      >
        {parseTogglePlay(getIsPlaying) === "Resume" && <Play />}
        {parseTogglePlay(getIsPlaying) === "Pause" && <Pause />}
      </PlayTrackButton>
    </>
  );
};
