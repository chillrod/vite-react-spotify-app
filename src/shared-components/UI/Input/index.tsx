import React from "react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

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
      <InputGroup mt="5">
        {search && (
          <InputLeftElement color="gray.200" children={<SearchIcon />} />
        )}
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
