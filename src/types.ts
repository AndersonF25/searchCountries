export type CardProps = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital: string;
  numericCode: string;
};

export type MyContextProps = {
  useSearchCountry: (query: string) => void;
};
