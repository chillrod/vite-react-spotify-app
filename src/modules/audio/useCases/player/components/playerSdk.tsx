import React, { useCallback } from "react";

import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

interface PlayerSdkProps {
  children?: JSX.Element;
  getAccessToken: any;
}

export const PlayerSdk = ({ children, getAccessToken }: PlayerSdkProps) => {
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
