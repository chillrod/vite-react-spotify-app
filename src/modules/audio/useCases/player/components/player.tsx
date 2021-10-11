import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { Play } from "react-feather";

import { MusicController } from "../../music/controller";

import {
  useSpotifyPlayer,
  SpotifyPlayer as SpotifyPlayerType,
} from "react-spotify-web-playback-sdk";

import { SpotleafColors } from "../../../../../config/spotleaf/colors";

import { parseTogglePlay } from "../../../../../helpers/parseTogglePlay";

import { PlayTrackButton } from "./player.styles";

export const SpotifyPlayer = (): any => {
  const [togglePlay, setTogglePlay] = useState(true);

  const player = useSpotifyPlayer();

  const getSelectedMusic = useRecoilValue(
    MusicController.state.getSelectedMusic
  );

  const togglePlayer = (playerInstance: SpotifyPlayerType) => {
    playerInstance.togglePlay();

    setTogglePlay(!togglePlay);
  };

  if (player === null) return null;

  return (
    <>
      <PlayTrackButton
        onClick={() => togglePlayer(player)}
        spotleafPrimary={SpotleafColors.primary}
      >
        <Play />
      </PlayTrackButton>
    </>
  );
};
