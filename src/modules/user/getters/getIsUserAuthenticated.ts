import { selector } from "recoil";
import { isUserAuthenticatedData } from "../model/isUserAuthenticated";

export const getIsUserAuthenticated = selector({
  key: "getIsUserAuthenticated",
  get: ({ get }) => {
    const isUserAuthenticated = get(isUserAuthenticatedData);

    return isUserAuthenticated;
  },
});
