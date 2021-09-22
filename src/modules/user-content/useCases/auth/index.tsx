import React from "react";

import { AuthContainer } from "./styles";

import { ButtonComponent } from "../../../../shared-components/UI/Button";

import { handleAuth } from "./hooks/handleAuth";

export const AuthSection: React.FC = () => {
  return (
    <>
      <AuthContainer onSubmit={handleAuth}>
        <ButtonComponent isSubmit text="Login" color="teal" isLoading={false} />
      </AuthContainer>
    </>
  );
};
