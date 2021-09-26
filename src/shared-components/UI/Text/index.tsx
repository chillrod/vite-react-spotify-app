import React from "react";

import { Heading, Text } from "@chakra-ui/react";

interface TextComponentProps {
  text?: string;
  as?: any;
  size?: any;
  isText?: boolean;
  color?: string;
}

export const TextComponent = ({
  text,
  as,
  size,
  color,
  isText = false,
}: TextComponentProps) => {
  return (
    <>
      {isText && (
        <Text as={as} size={size} mt="3">
          {text}
        </Text>
      )}
      {!isText && (
        <Heading as={as} size={size} color={color}>
          {text}
        </Heading>
      )}
    </>
  );
};
