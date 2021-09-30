import React, { useState } from "react";

import {
  useSpotifyPlayer,
  SpotifyPlayer as SpotifyPlayerType,
} from "react-spotify-web-playback-sdk";
import { parseTogglePlay } from "../../../../../helpers/parseTogglePlay";

import { ButtonComponent } from "../../../../../shared-components/UI/Button";

export const SpotifyPlayer = (): any => {
  const [togglePlay, setTogglePlay] = useState(true);

  const player = useSpotifyPlayer();

  const togglePlayer = (playerInstance: SpotifyPlayerType) => {
    playerInstance.togglePlay();

    setTogglePlay(!togglePlay);
  };

  if (player === null) return null;

  return (
    <>
      <ButtonComponent
        onClick={() => togglePlayer(player)}
        text={parseTogglePlay(togglePlay)}
        color="teal"
      />
    </>
  );
};
