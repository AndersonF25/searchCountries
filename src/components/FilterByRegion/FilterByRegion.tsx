import { ChangeEvent } from "react";
import { apiURL } from "../../utils/api";
import { Container, Label, Option, Select } from "./filter.style";

type FilterProps = {
  getByRegion: (region: string) => void;
  fetchCountries: (countries: string) => void;
};

export default function Filter({ getByRegion, fetchCountries }: FilterProps) {
  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    if (region === "all") {
      fetchCountries(`${apiURL}/all`);
    } else {
      getByRegion(region);
    }
  };

  return (
    <Container>
      <Label htmlFor="continent">Filter by Continent :</Label>
      <Select id="continent" onChange={selectHandler}>
        <Option value="all">All</Option>
        <Option value="Africa">Africa</Option>
        <Option value="Americas">Americas</Option>
        <Option value="Asia">Asia</Option>
        <Option value="Europe">Europe</Option>
        <Option value="Oceania">Oceania</Option>
      </Select>
    </Container>
  );
}
