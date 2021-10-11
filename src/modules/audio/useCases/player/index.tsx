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
  isPlaying: SetterOrUpdater<boolean>;
  queueChanged: {}[];
}

export const PlayerSection = ({
  playTrack,
  getAccessToken,
  queueChanged,
  isPlaying,
}: PlayerSectionProps) => {
  return (
    <>
      <PlayerSdk getAccessToken={getAccessToken}>
        <PlayerGUI>
          <SpotifyPlayer isPlaying={isPlaying} />
          <PlayTrack
            playTrack={playTrack}
            queueChanged={queueChanged}
            isPlaying={isPlaying}
          />
          <PlayerState />
        </PlayerGUI>
      </PlayerSdk>
    </>
  );
};
