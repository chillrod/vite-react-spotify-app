import React from "react";

import { Avatar } from "@chakra-ui/react";

import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";

import { UserContainer } from "./styles";
import { TextComponent } from "../../../../shared-components/UI/Text";

interface UserSectionProps {
  user: {
    email?: string;
    display_name?: string;
    images: {
      url: string;
    };
  };
}

export const UserDataSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <UserContainer>
      <Avatar src={returnImageUrl(returnIndexOfArray(user.images, 0))} />
      <TextComponent
        text={`You're logged in as ${user.display_name}`}
        as="p"
        size="sm"
      />
    </UserContainer>
  );
};
