import React from "react";

import { Input } from "@chakra-ui/react";

interface InputComponentProps {
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  variant: string;
}

export const InputComponent = ({
  placeholder,
  variant,
  value,
  onChange,
}: InputComponentProps) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant={variant}
        m="6"
        mr="0"
        ml="0"
      />
    </>
  );
};
