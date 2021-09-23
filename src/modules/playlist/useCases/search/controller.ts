import { searchedMusicData } from "../../model/searchedMusic";
import { getSearchedMusic } from "../../getters/getSearchedMusic";

import { searchMusic } from "./hooks/searchMusic";
export const SearchController = {
  state: {
    setSearchedMusic: searchedMusicData,
    getSearchedMusic: getSearchedMusic,
  },
  hooks: {
    searchMusic,
  },
};
