import React, { useEffect } from "react";

import { AuthSection } from "./useCases/auth";

import { TextComponent } from "../../shared-components/UI/Text";
import { UserContentSection } from "./styles";
export const UserContent = () => {
  return (
    <UserContentSection>
      <TextComponent
        as="h2"
        size="xl"
        text="Hello! Please log-in to Spotify to continue"
      />
      <AuthSection />
    </UserContentSection>
  );
};
