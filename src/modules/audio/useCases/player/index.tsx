import React from "react";

import { SetterOrUpdater } from "recoil";

import { CurrentSong } from "./components/currentSong";
import { PlayTrack } from "./components/playTrack";
import { SpotifyPlayer } from "./components/player";
import { PlayerSdk } from "./components/playerSdk";

import { PlayerGUI } from "./styles";
interface PlayerSectionProps {
  showControls: boolean;
  playTrack: SetterOrUpdater<boolean>;
  getAccessToken?: any;
}

export const PlayerSection = ({
  showControls,
  playTrack,
  getAccessToken,
}: PlayerSectionProps) => {
  return (
    <>
      <PlayerSdk getAccessToken={getAccessToken}>
        <PlayerGUI>
          <CurrentSong />
          <PlayTrack playTrack={playTrack} />
          {showControls && <SpotifyPlayer />}
        </PlayerGUI>
      </PlayerSdk>
    </>
  );
};
