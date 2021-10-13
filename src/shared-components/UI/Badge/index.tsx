import { Badge } from "@chakra-ui/layout";
import React from "react";

interface BadgeComponentProps {
  colorScheme?: string;
  text?: string;
  variant?: string;
}

export const BadgeComponent = ({
  colorScheme,
  text,
  variant,
}: BadgeComponentProps) => {
  return (
    <Badge colorScheme={colorScheme} variant={variant}>
      {text}
    </Badge>
  );
};
