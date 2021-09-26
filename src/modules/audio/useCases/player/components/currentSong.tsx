import React from "react";

import { usePlaybackState } from "react-spotify-web-playback-sdk";
import { TextComponent } from "../../../../../shared-components/UI/Text";

export const CurrentSong = () => {
  const playbackState = usePlaybackState();

  if (playbackState === null) return null;

  return (
    <TextComponent
      text={`Current playing: ${playbackState.track_window.current_track.name}`}
      as="p"
      size="sm"
    />
  );
};
