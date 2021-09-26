import React from "react";

import { Heading } from "@chakra-ui/react";

interface TextComponentProps {
  text?: string;
  as?: any;
  size?: any;
}

export const TextComponent = ({ text, as, size }: TextComponentProps) => {
  return (
    <>
      <Heading as={as} size={size}>
        {text}
      </Heading>
    </>
  );
};
