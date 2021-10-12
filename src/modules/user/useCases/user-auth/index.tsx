import React from "react";
import { handleAuthorization } from "./hooks/handleAuthorization";

import { AuthContainer } from "./styles";
import { ButtonComponent } from "../../../../shared-components/UI/Button";
import { TextComponent } from "../../../../shared-components/UI/Text";
import { SpotleafColors } from "../../../../config/spotleaf/colors";
import { AuthSectionDTO } from "./dto";

export const AuthSection: React.FC<AuthSectionDTO> = ({
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
            isText
            fontSize={"2.5rem"}
            color={SpotleafColors.primary}
            text="join spotify to continue"
          />
          <AuthContainer>
            <ButtonComponent
              homeBtn
              onClick={() =>
                handleAuthorization({
                  client_id,
                  redirect_uri,
                  scopes,
                })
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
