import { FormEvent, useEffect, useState } from "react";
import { InputContainer, Input, IconContainer, Form } from "./search.style";
import { CiSearch } from "react-icons/ci";

import { apiURL } from "../../utils/api";

type SearchBarProps = {
  getByName: (name: string) => void;
  fetchCountries: (query: string) => void;
};

const SearchBar = ({ getByName, fetchCountries }: SearchBarProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      getByName(input);
    }
  };

  useEffect(() => {
    if (input.trim() === "") {
      fetchCountries(`${apiURL}/all`);
    }
  }, [input]);

  return (
    <InputContainer>
      <IconContainer>
        <CiSearch size={22} />
      </IconContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search for a countrie..."
          onChange={(e) => setInput(e.target.value)}
        />
      </Form>
    </InputContainer>
  );
};

export default SearchBar;
