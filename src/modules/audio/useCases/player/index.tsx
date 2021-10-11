import React from "react";

import { SetterOrUpdater } from "recoil";

import { PlayerSdk } from "./components/playerSdk";
import { SpotifyPlayer } from "./components/player";
import { PlayerState } from "./components/playerState";
import { PlayTrack } from "./components/playTrack";

import { PlayerGUI } from "./styles";
interface PlayerSectionProps {
  playTrack: SetterOrUpdater<boolean>;
  getAccessToken?: any;
  isPlaying: [boolean, SetterOrUpdater<boolean>];
  queueChanged: {}[];
}

export const PlayerSection = ({
  playTrack,
  getAccessToken,
  queueChanged,
  isPlaying: [getIsPlaying, setIsPlaying],
}: PlayerSectionProps) => {
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
