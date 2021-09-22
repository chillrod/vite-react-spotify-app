import React from "react";

import { Button } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  color?: string;
  isLoading: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  color,
  isLoading = false,
}) => {
  return (
    <>
      <Button isLoading={isLoading} colorScheme={color}>
        {text}
      </Button>
    </>
  );
};
