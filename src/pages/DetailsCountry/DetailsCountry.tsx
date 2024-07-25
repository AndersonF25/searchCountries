import { useEffect, useState } from "react";
import { CardProps } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { apiURL } from "../../utils/api";
import { BtnBack, Container } from "./details.style";
import AboutCountry from "../../components/AboutCountry/AboutCountry";
import Loader from "../../components/Loader/Loader";

const DetailsCountry = () => {
  const [country, setCountry] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { countryName } = useParams();

  const getByCountryName = async () => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);
      if (!res.ok) {
        throw new Error(`Algo deu errado, tente novamente!`);
      }
      const data = await res.json();
      setCountry(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Algo deu errado, tente novamente");
    }
  };

  useEffect(() => {
    getByCountryName();
  }, [countryName]);

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
