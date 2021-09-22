import React, { useEffect, useState } from "react";

import { AuthSection } from "./useCases/auth";
import { handleToken } from "./useCases/auth/hooks/handleToken";

import { UserContentSection } from "./styles";

export const UserContent = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [authBehavior, setAuthBehavior] = useState("GET_AUTHORIZATION");

  useEffect(() => {
    const getQueryString = new URLSearchParams(window.location.search);

    const getCode = getQueryString.get("code");

    if (getCode?.length) {
      setAuthBehavior("GET_TOKEN");

      handleToken({ code: getCode, redirect_uri: "http://localhost:3000" });
    }
  }, []);

  return (
    <UserContentSection>
      {!isUserLogged && <AuthSection authBehavior={authBehavior} />}
      {/* {isUserLogged && <AuthSection />} */}
    </UserContentSection>
  );
};
