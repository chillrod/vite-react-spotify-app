import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { AuthSection } from "./useCases/user-auth";
import { oAuthCredentials } from "./shared/oAuthCredentials";
import { handleToken } from "./useCases/user-auth/hooks/handleToken";

import { accessTokenData } from "./model/tokenState";
import { getAccessToken } from "./getters/getToken";

import { UserSection } from "./styles";

export const User = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [authBehavior, setAuthBehavior] = useState("GET_AUTHORIZATION");

  const { client_id, client_secret, redirect_uri, scopes } = oAuthCredentials;

  const setToken = useSetRecoilState(accessTokenData);

  const token = useRecoilValue(getAccessToken);

  useEffect(() => {
    const getQueryString = new URLSearchParams(window.location.search);

    const getCode = getQueryString.get("code");
    const getAccessToken = localStorage.getItem("access_token");

    if (!getCode?.length) return;

    if (getAccessToken?.length) {
      setToken(getAccessToken);
    }

    if (!token) {
      setAuthBehavior("GET_TOKEN");
      handleToken({
        code: getCode,
        redirect_uri: "http://localhost:3000",
        client_id,
        client_secret,
      });
    }
  }, [token]);

  return (
    <UserSection>
      {!isUserLogged && (
        <AuthSection
          authBehavior={authBehavior}
          client_id={client_id}
          redirect_uri={redirect_uri}
          scopes={scopes}
        />
      )}
    </UserSection>
  );
};
