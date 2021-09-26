import { selector } from "recoil";
import { musicData } from "../model/musicData";

export const getMusic = selector({
  key: "getMusic",
  get: ({ get }) => {
    const tracks = get(musicData);

    return tracks;
  },
});
