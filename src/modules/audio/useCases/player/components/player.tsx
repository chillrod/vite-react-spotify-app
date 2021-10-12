import React from "react";

import {
  useSpotifyPlayer,
  SpotifyPlayer as SpotifyPlayerType,
} from "react-spotify-web-playback-sdk";

import { SpotifyPlayerDTO } from "../dto";

import { parseTogglePlay } from "../../../../../helpers/parseTogglePlay";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { PlayTrackButton } from "./player.styles";

import { Play, Pause } from "react-feather";

export const SpotifyPlayer = ({
  isPlaying: [getIsPlaying, setIsPlaying],
}: SpotifyPlayerDTO): any => {
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
