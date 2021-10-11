import { firstPlayData } from "../../model/firstPlayData";
import { getIsFirstPlay } from "../../getters/getIsFirstPlay";

import { currentPlayingData } from "../../model/currentPlaying";
import { getCurrentPlaying } from "../../getters/getCurrentPlaying";

import { playTrack } from "./hooks/playTrack";

export const PlayerController = {
  state: {
    setFirstPlay: firstPlayData,
    getIsFirstPlay,
    getCurrentPlaying,
    setCurrentPlaying: currentPlayingData,
  },
  hooks: {
    playTrack,
  },
};
