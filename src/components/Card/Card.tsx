import { CardProps } from "../../types";
import { formatPopulation } from "../../utils/formatPopulation";
import { ContainerCard, Content, CountryName, Flag, Span } from "./card.style";

const Card = ({
  capital,
  flags,
  name,
  population,
  region,
  numericCode,
}: CardProps) => {
  return (
    <ContainerCard key={numericCode}>
      <Flag src={flags.svg} />
      <Content>
        <CountryName>{name.common}</CountryName>
        <Span>Population: {formatPopulation(population)}</Span>
        <Span>Region: {region}</Span>
        <Span>Capital: {capital}</Span>
      </Content>
    </ContainerCard>
  );
};

export default Card;
