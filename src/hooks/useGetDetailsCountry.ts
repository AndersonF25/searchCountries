import { useEffect, useState } from "react";
import { CardProps } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { apiURL } from "../utils/api";

export const useGetDetailsCountry = () => {
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

  return {
    country,
    loading,
    error,
    navigate,
  };
};
