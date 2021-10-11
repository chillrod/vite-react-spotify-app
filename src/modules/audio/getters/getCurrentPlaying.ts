import { selector } from "recoil";

import { currentPlayingData } from "../model/currentPlaying";

export const getCurrentPlaying = selector({
  key: "getCurrentPlaying",
  get: ({ get }) => {
    const currentPlaying = get(currentPlayingData);

    return currentPlaying;
  },
});
