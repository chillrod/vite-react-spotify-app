import React from "react";

// import { UserContainer } from "./styles";
import { TextComponent } from "../../../../shared-components/UI/Text";

interface UserSectionProps {
  user: {
    email?: string;
    display_name?: string;
  };
}

export const UserDataSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <>
      <TextComponent as="h2" size="xl" text="Hello!" />
      You're logged in as {user.display_name}
    </>
  );
};
