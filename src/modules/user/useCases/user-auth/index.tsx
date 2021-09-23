import React from "react";
import { handleAuthorization } from "./hooks/handleAuthorization";

import { AuthContainer } from "./styles";
import { ButtonComponent } from "../../../../shared-components/UI/Button";
import { TextComponent } from "../../../../shared-components/UI/Text";

interface AuthSectionProps {
  authBehavior: string;
  client_id: string;
  redirect_uri: string;
  scopes: string[];
}

export const AuthSection: React.FC<AuthSectionProps> = ({
  authBehavior,
  client_id,
  redirect_uri,
  scopes,
}) => {
  return (
    <>
      {authBehavior === "GET_AUTHORIZATION" && (
        <>
          <TextComponent
            as="h2"
            size="xl"
            text="Hello! Please log-in to Spotify to continue"
          />
          <AuthContainer>
            <ButtonComponent
              onClick={() =>
                handleAuthorization({ client_id, redirect_uri, scopes })
              }
              text="Login"
              color="teal"
            />
          </AuthContainer>
        </>
      )}

      {authBehavior === "GET_TOKEN" && (
        <>
          <TextComponent as="h2" size="xl" text="Almost ready!" />
          <AuthContainer>
            <ButtonComponent text="Loading" color="teal" isLoading />
          </AuthContainer>
        </>
      )}
    </>
  );
};
