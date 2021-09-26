import React from "react";
import { useSpotifyPlayer } from "react-spotify-web-playback-sdk";

import { ButtonComponent } from "../../../../../shared-components/UI/Button";

export const SpotifyPlayer = (): any => {
  const player = useSpotifyPlayer();

  if (player === null) return null;

  return (
    <>
      <ButtonComponent
        onClick={() => player.pause()}
        text="Pause"
        color="teal"
      />
      <ButtonComponent
        onClick={() => player.resume()}
        text="Resume"
        color="teal"
      />
    </>
  );
};
