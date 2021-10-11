import { userData } from "../../model/userState";
import { getUserData } from "../../getters/getUser";

import { handleAuthenticatedUser } from "./hooks/handleAuthenticatedUser";

export const UserDataController = {
  state: {
    set: userData,
    get: getUserData,
  },
  hooks: {
    handleAuthenticatedUser,
  },
};
