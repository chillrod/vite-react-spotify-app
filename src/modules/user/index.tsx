import React, { useEffect, useState } from "react";

import { useSetRecoilState, useRecoilValue } from "recoil";

import { AuthSection } from "./useCases/user-auth";
import { UserAuthController } from "./useCases/user-auth/controller";
import { oAuthCredentials } from "./shared/oAuthCredentials";

import { UserDataSection } from "./useCases/user-data";
import { UserDataController } from "./useCases/user-data/controller";

import { UserSection } from "./styles";

export const User = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [authBehavior, setAuthBehavior] = useState("GET_AUTHORIZATION");
  const { grant_type, client_id, client_secret, redirect_uri, scopes } =
    oAuthCredentials;

  const setAccessToken = useSetRecoilState(UserAuthController.state.set);

  const setUserData = useSetRecoilState(UserDataController.state.set);

  const getUserData = useRecoilValue(UserDataController.state.get);

  const getQueryString = new URLSearchParams(window.location.search);

  const getCode = getQueryString.get("code");

  useEffect(() => {
    if (getCode?.length) {
      setAuthBehavior("GET_TOKEN");

      UserAuthController.hooks
        .handleToken({
          grant_type,
          code: getCode,
          redirect_uri,
          client_id,
          client_secret,
        })
        .then((res) => {
          setAccessToken(res.access_token);

          UserDataController.hooks
            .handleAuthenticatedUser(res)
            .then((userResponse) => {
              if (userResponse) {
                setUserData({ ...userResponse });

                setIsUserLogged(true);
              }
            });
        });

      getQueryString.delete("code");
      history.replaceState(null, "", "?" + getQueryString + location.hash);
    }
  }, []);

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

      {isUserLogged && <UserDataSection user={getUserData} />}
    </UserSection>
  );
};
