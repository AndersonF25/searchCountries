import { useEffect, useState } from "react";
import { CardProps } from "../types";
import { apiURL } from "../utils/api";
import { usePagination } from "./usePagination";

export const useGetCountries = () => {
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
      setIsSearching(url.includes("/name/"));
      if (url.includes("/name/")) {
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

  return {
    countries,
    isLoading,
    error,
    isSearching,
    currentItems,
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    fetchCountries,
    getCountryByName,
    getByRegion,
    changeCurrentPage,
  };
};
