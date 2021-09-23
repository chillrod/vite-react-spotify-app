import { selector } from "recoil";
import { accessTokenData } from "../model/tokenState";

export const getAccessToken = selector({
  key: "getAccessToken",
  get: ({ get }) => {
    const token = get(accessTokenData);

    return token;
  },
});
