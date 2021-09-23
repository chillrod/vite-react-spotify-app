import { accessTokenData } from "../../model/tokenState";
import { getAccessToken } from "../../getters/getAccessToken";

import { handleAuthorization } from "./hooks/handleAuthorization";
import { handleToken } from "./hooks/handleToken";

export const UserAuthController = {
  state: {
    set: accessTokenData,
    get: getAccessToken,
  },
  hooks: {
    handleToken,
    handleAuthorization,
  },
};
