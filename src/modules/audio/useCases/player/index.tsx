import React, { useCallback } from "react";

import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

import { CurrentSong } from "./components/currentSong";
import { ConnectDevice } from "./components/connectDevice";
import { SpotifyPlayer } from "./components/player";

interface PlayerSectionProps {
  getAccessToken?: any;
  selectedTrack?: {};
}

export const PlayerSection = ({
  getAccessToken,
  selectedTrack,
}: PlayerSectionProps) => {
  const getOAuthToken = useCallback((callback) => callback(getAccessToken), []);

  return (
    <WebPlaybackSDK
      deviceName="Spotleaf web player 🍀"
      getOAuthToken={getOAuthToken}
    >
      <CurrentSong />
      <ConnectDevice
        selectedTrack={selectedTrack}
        getAccessToken={getAccessToken}
      />
      <SpotifyPlayer />
    </WebPlaybackSDK>
  );
};
