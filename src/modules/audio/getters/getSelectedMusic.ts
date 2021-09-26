import { selector } from "recoil";
import { selectedMusicData } from "../model/selectedMusicData";

export const getSelectedMusic = selector({
  key: "getSelectedMusic",
  get: ({ get }) => {
    const track = get(selectedMusicData);

    return track;
  },
});
