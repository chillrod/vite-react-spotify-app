import { selector } from "recoil";

import { playerQueueData } from "../model/playerQueue";

export const getPlayerQueue = selector({
  key: "getPlayerQueue",
  get: ({ get }) => {
    const tracks = get(playerQueueData);

    return tracks;
  },
});
