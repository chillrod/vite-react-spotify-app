import { selector } from "recoil";
import { playTrackFromApiData } from "../model/playTrackFromApi";

export const getPlayTrackFromApi = selector({
  key: "getPlayTrackFromApi",
  get: ({ get }) => {
    const connect = get(playTrackFromApiData);

    return connect;
  },
});
