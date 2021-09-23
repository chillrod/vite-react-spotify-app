import React from "react";

import { Input } from "@chakra-ui/react";

interface InputComponentProps {
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputComponent = ({
  placeholder,
  value,
  onChange,
}: InputComponentProps) => {
  return (
    <>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};
