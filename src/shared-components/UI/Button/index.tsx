import React from "react";

import { Button } from "@chakra-ui/react";

import { Play, ChevronRight } from "react-feather";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  color?: string;
  isLoading?: boolean;
  isSubmit?: boolean;
  play?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  homeBtn?: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  color,
  isLoading = false,
  onClick,
  isSubmit = false,
  play,
  homeBtn,
}) => {
  return (
    <>
      <motion.div
        className="ui-button"
        whileHover={{
          y: -2,
        }}
      >
        <Button
          rightIcon={
            <>
              {play && <Play />}

              {homeBtn && <ChevronRight />}
            </>
          }
          type={isSubmit ? "submit" : "button"}
          isLoading={isLoading}
          colorScheme={color}
          onClick={onClick}
        >
          {text}
        </Button>
      </motion.div>
    </>
  );
};
