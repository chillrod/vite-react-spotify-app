import React from "react";

import { SetterOrUpdater } from "recoil";

import { CurrentSong } from "./components/currentSong";
import { PlayTrack } from "./components/playTrack";
import { SpotifyPlayer } from "./components/player";
import { PlayerSdk } from "./components/playerSdk";

import { PlayerGUI } from "./styles";
interface PlayerSectionProps {
  playTrack: SetterOrUpdater<boolean>;
  getAccessToken?: any;
  showControls: boolean;
}

export const PlayerSection = ({
  playTrack,
  getAccessToken,
  showControls,
}: PlayerSectionProps) => {
  return (
    <>
      <PlayerSdk getAccessToken={getAccessToken}>
        <PlayerGUI>
          <CurrentSong />
          {!showControls && <PlayTrack playTrack={playTrack} />}
          {showControls && (
            <>
              <SpotifyPlayer />
            </>
          )}
        </PlayerGUI>
      </PlayerSdk>
    </>
  );
};
