import React from "react";

import { Button } from "@chakra-ui/react";
import { Play } from "react-feather";

interface ButtonProps {
  text: string;
  color?: string;
  isLoading?: boolean;
  isSubmit?: boolean;
  play?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  color,
  isLoading = false,
  onClick,
  isSubmit = false,
  play = false,
}) => {
  return (
    <>
      <Button
        rightIcon={play ? <Play /> : <></>}
        type={isSubmit ? "submit" : "button"}
        isLoading={isLoading}
        colorScheme={color}
        onClick={onClick}
        mt="3"
      >
        {text}
      </Button>
    </>
  );
};
