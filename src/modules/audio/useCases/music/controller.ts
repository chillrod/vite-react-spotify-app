import { searchedMusicData } from "../../model/searchedMusicData";
import { getSearchedMusic } from "../../getters/getSearchedMusic";

import { selectedMusicData } from "../../model/selectedMusicData";
import { getSelectedMusic } from "../../getters/getSelectedMusic";

import { getIsSearching } from "../../getters/getIsSearching";
import { isSearchingData } from "../../model/isSearching";

import { queueOrderData } from "../../model/queueOrder";
import { getQueueOrder } from "../../getters/getQueueOrder";

import { searchMusic } from "./hooks/searchMusic";
import { recommendedMusics } from "./hooks/recommendedMusics";
import { setSelectedMusic } from "./hooks/selectedMusic";
import { handleToggleActive } from "./hooks/handleToggleActive";
import { handleSelectedMusic } from "./hooks/handleSelectedMusic";

export const MusicController = {
  state: {
    setSearchedMusic: searchedMusicData,
    getSearchedMusic,
    setIsSerching: isSearchingData,
    getIsSearching,
    setSelectedMusic: selectedMusicData,
    getSelectedMusic: getSelectedMusic,
    getQueueOrder,
    setQueueOrder: queueOrderData,
  },
  hooks: {
    searchMusic,
    recommendedMusics,
    setSelectedMusic,
    handleToggleActive,
    handleSelectedMusic,
  },
};
