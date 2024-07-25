import { ChangeEvent } from "react";
import { apiURL } from "../../utils/api";

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
    <div>
      <label htmlFor="continent">Filter by Continent:</label>
      <select id="continent" onChange={selectHandler}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
