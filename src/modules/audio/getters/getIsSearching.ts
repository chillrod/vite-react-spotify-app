import { selector } from "recoil";
import { isSearchingData } from "../model/isSearching";

export const getIsSearching = selector({
  key: "getIsSearching",
  get: ({ get }) => {
    const isSearching = get(isSearchingData);

    return isSearching;
  },
});
