import { selector } from "recoil";
import { alreadyConnected } from "../model/alreadyConnected";

export const getAlreadyConnected = selector({
  key: "getAlreadyConnected",
  get: ({ get }) => {
    const connected = get(alreadyConnected);

    return connected;
  },
});
