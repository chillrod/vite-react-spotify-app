import { selector } from "recoil";
import { firstPlayData } from "../model/firstPlayData";

export const getIsFirstPlay = selector({
  key: "getIsFirstPlay",
  get: ({ get }) => {
    const connect = get(firstPlayData);

    return connect;
  },
});
