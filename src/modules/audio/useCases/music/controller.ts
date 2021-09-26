import { musicData } from "../../model/musicData";
import { getMusic } from "../../getters/getMusic";
import { selectedMusicData } from "../../model/selectedMusicData";
import { getSelectedMusic } from "../../getters/getSelectedMusic";

import { searchMusic } from "./hooks/searchMusic";
import { recommendedMusics } from "./hooks/recommendedMusics";
import { setSelectedMusic } from "./hooks/selectedMusic";

export const MusicController = {
  state: {
    setMusic: musicData,
    getMusic: getMusic,
    setSelectedMusic: selectedMusicData,
    getSelectedMusic: getSelectedMusic,
  },
  hooks: {
    searchMusic,
    recommendedMusics,
    setSelectedMusic,
  },
};
