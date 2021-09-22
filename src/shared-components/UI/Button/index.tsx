import React from "react";

import { Button } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  color?: string;
  isLoading?: boolean;
  isSubmit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  color,
  isLoading = false,
  onClick,
  isSubmit = false,
}) => {
  return (
    <>
      <Button
        type={isSubmit ? "submit" : "button"}
        isLoading={isLoading}
        colorScheme={color}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};
