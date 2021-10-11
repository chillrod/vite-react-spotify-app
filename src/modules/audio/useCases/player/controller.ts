import { playTrackFromApiData } from "../../model/playTrackFromApi";
import { getPlayTrackFromApi } from "../../getters/getPlayTrackFromApi";

import { currentPlayingData } from "../../model/currentPlaying";
import { getCurrentPlaying } from "../../getters/getCurrentPlaying";

import { playerQueueData } from "../../model/playerQueue";
import { getPlayerQueue } from "../../getters/getPlayerQueue";

import { playTrack } from "./hooks/playTrack";

export const PlayerController = {
  state: {
    setPlayTrackFromApi: playTrackFromApiData,
    getPlayTrackFromApi,
    getCurrentPlaying,
    setCurrentPlaying: currentPlayingData,
    setPlayerQueue: playerQueueData,
    getPlayerQueue,
  },
  hooks: {
    playTrack,
  },
};
