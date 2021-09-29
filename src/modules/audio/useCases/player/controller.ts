import { firstPlayData } from "../../model/firstPlayData";
import { getIsFirstPlay } from "../../getters/getIsFirstPlay";

import { playTrack } from "./hooks/playTrack";

export const PlayerController = {
  state: {
    setFirstPlay: firstPlayData,
    getIsFirstPlay: getIsFirstPlay,
  },
  hooks: {
    playTrack,
  },
};
