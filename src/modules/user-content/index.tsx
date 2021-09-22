import React from "react";

import { TextComponent } from "../../shared-components/UI/Text";
import { AuthSection } from "./useCases/auth";

export const UserContent = () => {
  return (
    <>
      <TextComponent as="h2" size="xl" text="Hello! Please log-in to Spotify" />
      <AuthSection />
    </>
  );
};
