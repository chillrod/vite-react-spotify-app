import { selector } from "recoil";
import { userData } from "../model/userState";

export const getUserData = selector({
  key: "getUserData",
  get: ({ get }) => {
    const user = get(userData);

    return user;
  },
});
