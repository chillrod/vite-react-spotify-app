import { selector } from "recoil";
import { isPlayingData } from "../model/isPlaying";

export const getIsPlaying = selector({
  key: "getIsPlaying",
  get: ({ get }) => {
    const isPlaying = get(isPlayingData);

    return isPlaying;
  },
});
