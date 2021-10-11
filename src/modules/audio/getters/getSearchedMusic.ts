import { selector } from "recoil";
import { searchedMusicData } from "../model/searchedMusicData";

export const getSearchedMusic = selector({
  key: "getSearchedMusic",
  get: ({ get }) => {
    const tracks = get(searchedMusicData);

    return tracks;
  },
});
