import { accessTokenData } from "../../model/tokenState";
import { getAccessToken } from "../../getters/getAccessToken";

import { handleAuthorization } from "./hooks/handleAuthorization";
import { handleToken } from "./hooks/handleToken";

import { isUserAuthenticatedData } from "../../model/isUserAuthenticated";
import { getIsUserAuthenticated } from "../../getters/getIsUserAuthenticated";

export const UserAuthController = {
  state: {
    setToken: accessTokenData,
    getToken: getAccessToken,
    setIsUserAuthenticated: isUserAuthenticatedData,
    getIsUserAuthenticated: getIsUserAuthenticated,
  },
  hooks: {
    handleToken,
    handleAuthorization,
  },
};
