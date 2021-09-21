import React from "react";

import { Heading } from "@chakra-ui/react";

interface TitleComponentProps {
  title: String;
}

export const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <>
      <Heading>{title}</Heading>
    </>
  );
};
