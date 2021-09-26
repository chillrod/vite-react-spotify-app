import { musicData } from "../../model/musicData";
import { getMusic } from "../../getters/getMusic";

import { searchMusic } from "./hooks/searchMusic";
import { recommendedMusics } from "./hooks/recommendedMusics";

export const MusicController = {
  state: {
    setMusic: musicData,
    getMusic: getMusic,
  },
  hooks: {
    searchMusic,
    recommendedMusics,
  },
};
