import { selector } from "recoil";
import { queueOrderData } from "../model/queueOrder";

export const getQueueOrder = selector({
  key: "getQueueOrder",
  get: ({ get }) => {
    const order = get(queueOrderData);

    return order;
  },
});
