import React, { useEffect, useState } from "react";

import { Avatar } from "@chakra-ui/react";

import { returnImageUrl } from "../../../../helpers/imageUrl";
import { returnIndexOfArray } from "../../../../helpers/returnIndex";

import { UserContainer } from "./styles";
import { TextComponent } from "../../../../shared-components/UI/Text";

import { AnimatePresence } from "framer-motion";

interface UserSectionProps {
  user: {
    email?: string;
    display_name?: string;
    images?: {
      url: string;
    };
  };
}

export const UserDataSection: React.FC<UserSectionProps> = ({ user }) => {
  return (
    <>
      <UserContainer
        initial={{ opacity: 0, y: -1 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Avatar src={returnImageUrl(returnIndexOfArray(user.images, 0))} />
        <TextComponent
          text={`You're logged in as ${user.display_name}`}
          as="p"
          size="sm"
        />
      </UserContainer>
    </>
  );
};
