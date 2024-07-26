import { BtnBack, Container } from "./details.style";
import AboutCountry from "../../components/AboutCountry/AboutCountry";
import Loader from "../../components/Loader/Loader";
import { useGetDetailsCountry } from "../../hooks/useGetDetailsCountry";

const DetailsCountry = () => {
  const { country, error, loading, navigate } = useGetDetailsCountry();

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <Container>
        <BtnBack onClick={() => navigate("/")}>back</BtnBack>
        {country?.map((item) => (
          <AboutCountry
            capital={item.capital}
            flags={item.flags}
            name={item.name}
            numericCode={item.numericCode}
            population={item.population}
            region={item.region}
            subregion={item.subregion}
          />
        ))}
      </Container>
    </>
  );
};

export default DetailsCountry;
