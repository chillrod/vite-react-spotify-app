import React from "react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search } from "react-feather";

interface InputComponentProps {
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variant?: string;
  search?: boolean;
}

export const InputComponent = ({
  placeholder,
  variant,
  value,
  onChange,
  search,
}: InputComponentProps) => {
  return (
    <>
      <InputGroup>
        {search && <InputLeftElement color="gray.200" children={<Search />} />}
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          variant={variant}
        />
      </InputGroup>
    </>
  );
};
