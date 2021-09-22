import React, { useState } from "react";

import { AuthContainer } from "./styles";
import { ButtonComponent } from "../../../../shared-components/UI/Button";

export const AuthSection: React.FC = () => {
  const [authButtonState, setAuthButtonState] = useState(false);

  const handleAuthButton = () => {
    console.log("hey");
    setAuthButtonState(!authButtonState);
  };

  return (
    <>
      <AuthContainer>
        <ButtonComponent
          text="Login"
          onClick={() => handleAuthButton}
          isLoading={false}
        />
      </AuthContainer>
    </>
  );
};
