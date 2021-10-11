import React from "react";

import { Heading, Text } from "@chakra-ui/react";

interface TextComponentProps {
  text?: string;
  as?: any;
  size?: any;
  fontSize?: string;
  isText?: boolean;
  color?: string;
}

export const TextComponent = ({
  text,
  as,
  size,
  fontSize,
  color,
  isText = false,
}: TextComponentProps) => {
  return (
    <>
      {isText && (
        <Text fontSize={fontSize} color={color}>
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
