import { searchedMusicData } from "../../model/searchedMusicData";
import { getSearchedMusic } from "../../getters/getSearchedMusic";

import { selectedMusicData } from "../../model/selectedMusicData";
import { getSelectedMusic } from "../../getters/getSelectedMusic";

import { searchMusic } from "./hooks/searchMusic";
import { recommendedMusics } from "./hooks/recommendedMusics";
import { setSelectedMusic } from "./hooks/selectedMusic";
import { getIsSearching } from "../../getters/getIsSearching";
import { isSearchingData } from "../../model/isSearching";

export const MusicController = {
  state: {
    setSearchedMusic: searchedMusicData,
    getSearchedMusic,
    setIsSerching: isSearchingData,
    getIsSearching,
    setSelectedMusic: selectedMusicData,
    getSelectedMusic: getSelectedMusic,
  },
  hooks: {
    searchMusic,
    recommendedMusics,
    setSelectedMusic,
  },
};
