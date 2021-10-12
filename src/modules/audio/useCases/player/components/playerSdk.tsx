import React, { useCallback } from "react";

import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

import { PlayerSdkDTO } from "../dto";

export const PlayerSdk = ({ children, getAccessToken }: PlayerSdkDTO) => {
  const getOAuthToken = useCallback((callback) => callback(getAccessToken), []);

  return (
    <WebPlaybackSDK
      deviceName="Spotleaf web player 🍀"
      getOAuthToken={getOAuthToken}
    >
      {children}
    </WebPlaybackSDK>
  );
};
