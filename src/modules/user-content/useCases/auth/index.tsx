import React from "react";

import { AuthContainer } from "./styles";

import { ButtonComponent } from "../../../../shared-components/UI/Button";

import { handleAuthorization } from "./hooks/handleAuthorization";
import { TextComponent } from "../../../../shared-components/UI/Text";

interface AuthSectionProps {
  authBehavior: string;
}

export const AuthSection: React.FC<AuthSectionProps> = ({ authBehavior }) => {
  return (
    <>
      {authBehavior === "GET_AUTHORIZATION" && (
        <>
          <TextComponent
            as="h2"
            size="xl"
            text="Hello! Please log-in to Spotify to continue"
          />
          <AuthContainer onSubmit={handleAuthorization}>
            <ButtonComponent isSubmit text="Login" color="teal" />
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
