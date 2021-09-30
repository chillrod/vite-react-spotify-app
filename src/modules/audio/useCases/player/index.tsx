import React, { useCallback } from "react";

import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

import { CurrentSong } from "./components/currentSong";
import { PlayTrack } from "./components/playTrack";
import { SpotifyPlayer } from "./components/player";
import { SetterOrUpdater } from "recoil";
import { PlayerGUI } from "./styles";
import { PlayerDeck } from "./components/playerDeck";

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
  const getOAuthToken = useCallback((callback) => callback(getAccessToken), []);

  return (
    <>
      <WebPlaybackSDK
        deviceName="Spotleaf web player 🍀"
        getOAuthToken={getOAuthToken}
      >
        <PlayerGUI>
          <CurrentSong />
          <PlayTrack playTrack={playTrack} />
          {showControls && <SpotifyPlayer />}
        </PlayerGUI>
      </WebPlaybackSDK>
      <PlayerDeck />
    </>
  );
};
