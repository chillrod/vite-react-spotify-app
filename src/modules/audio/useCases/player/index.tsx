import React from "react";

import { PlayerSectionDTO } from "./dto";

import { PlayerSdk } from "./components/playerSdk";
import { SpotifyPlayer } from "./components/player";
import { PlayerState } from "./components/playerState";
import { PlayTrack } from "./components/playTrack";

import { PlayerGUI } from "./styles";

export const PlayerSection = ({
  playTrack,
  getAccessToken,
  queueChanged,
  isPlaying: [getIsPlaying, setIsPlaying],
}: PlayerSectionDTO) => {
  return (
    <>
      <PlayerSdk getAccessToken={getAccessToken}>
        <PlayerGUI>
          <SpotifyPlayer isPlaying={[getIsPlaying, setIsPlaying]} />
          <PlayTrack
            playTrack={playTrack}
            queueChanged={queueChanged}
            isPlaying={[getIsPlaying, setIsPlaying]}
          />
          <PlayerState />
        </PlayerGUI>
      </PlayerSdk>
    </>
  );
};
