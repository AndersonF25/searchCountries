import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/FilterByRegion/FilterByRegion";
import Loader from "../../components/Loader/Loader";
import { Container, Grid, InputAndFilter } from "./allCountries.style";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";
import { useGetCountries } from "../../hooks/useGetCountries";

export const AllCountries = () => {
  const {
    changeCurrentPage,
    currentItems,
    currentPage,
    error,
    fetchCountries,
    getByRegion,
    getCountryByName,
    isLoading,
    isSearching,
    nextPage,
    prevPage,
    totalPages,
  } = useGetCountries();

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
