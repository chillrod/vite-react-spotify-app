import React, { useCallback } from "react";

import {
  WebPlaybackSDK,
  usePlaybackState,
  usePlayerDevice,
} from "react-spotify-web-playback-sdk";

const PlaybackSDk = ({ getAccessToken, selectedTrack }: any) => {
  const device = usePlayerDevice();

  const playCarlyRaeJepsen = () => {
    if (device === null) return;

    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${device.device_id}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: [selectedTrack.uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken}`,
        },
      }
    );
  };

  if (device === null) return null;

  return <button onClick={playCarlyRaeJepsen}>Play Song</button>;
};

const SongTitle: React.VFC = () => {
  const playbackState = usePlaybackState();

  if (playbackState === null) return null;

  return <p>Current song: {playbackState.track_window.current_track.name}</p>;
};

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
      <SongTitle />
      <PlaybackSDk
        selectedTrack={selectedTrack}
        getAccessToken={getAccessToken}
      />
    </WebPlaybackSDK>
  );
};
