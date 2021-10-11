import { currentPlayingData } from "../../model/currentPlaying";
import { getCurrentPlaying } from "../../getters/getCurrentPlaying";

import { playerQueueData } from "../../model/playerQueue";
import { getPlayerQueue } from "../../getters/getPlayerQueue";

import { isPlayingData } from "../../model/isPlaying";
import { getIsPlaying } from "../../getters/getIsPlaying";

import { playTrack } from "./hooks/playTrack";

export const PlayerController = {
  state: {
    getCurrentPlaying,
    setCurrentPlaying: currentPlayingData,
    setPlayerQueue: playerQueueData,
    getPlayerQueue,
    setIsPlaying: isPlayingData,
    getIsPlaying,
  },
  hooks: {
    playTrack,
  },
};
