import { useEffect, useState } from "react";
import { apiURL } from "../../utils/api";
import { CardProps } from "../../types";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/FilterByRegion/FilterByRegion";
import Loader from "../../components/Loader/Loader";
import { Container, Grid, InputAndFilter } from "./allCountries.style";
import Card from "../../components/Card/Card";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

export const AllCountries = () => {
  const [countries, setCountries] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const {
    changeCurrentPage,
    currentItems,
    currentPage,
    nextPage,
    prevPage,
    totalPages,
  } = usePagination(countries, 8);

  const fetchCountries = async (url: string) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Erro: ${res.statusText}`);
      }
      const data = await res.json();
      setCountries(data);
      setIsSearching(url.includes("/name/") || url.includes("/region/"));
      if (url.includes("/name/") || url.includes("/region/")) {
        changeCurrentPage(1);
      }
    } catch (error) {
      setError("Verifique se o nome do país esta correto.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries(`${apiURL}/all`);
  }, []);

  const getCountryByName = (name: string) => {
    fetchCountries(`${apiURL}/name/${name}`);
  };

  const getByRegion = (region: string) => {
    fetchCountries(`${apiURL}/region/${region}`);
  };

 

  return (
    <>
      <Container>
        <InputAndFilter className="responsive-searchBar">
          <SearchBar
            getByName={getCountryByName}
            fetchCountries={fetchCountries}
          />
          <Filter getByRegion={getByRegion} fetchCountries={fetchCountries} />
        </InputAndFilter>

        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        <Grid className="responsive-grid">
          {currentItems?.map((country) => (
            <Link
              key={country.name.common}
              to={`/country/${country.name.common}`}
            >
              <Card
                numericCode={country.numericCode}
                capital={country.capital}
                flags={country.flags}
                name={country.name}
                population={country.population}
                region={country.region}
              />
            </Link>
          ))}
        </Grid>
        {!isSearching && (
          <Pagination
           
            currentPage={currentPage}
            onNext={nextPage}
            onPrev={prevPage}
            onPageChange={changeCurrentPage}
            totalPages={totalPages}
          />
        )}
      </Container>
    </>
  );
};
