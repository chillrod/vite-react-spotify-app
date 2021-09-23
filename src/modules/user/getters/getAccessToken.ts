import { selector } from "recoil";
import { accessTokenData } from "../model/tokenState";

export const getAccessToken = selector({
  key: "getAccessToken",
  get: ({ get }) => {
    const access_token = get(accessTokenData);

    return access_token;
  },
});
