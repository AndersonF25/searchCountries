import { CardProps } from "../../types";
import { formatPopulation } from "../../utils/formatPopulation";
import {
  ContainerImg,
  ContainerText,
  Content,
  Country,
  Img,
  Span,
} from "./about.style";

const AboutCountry = ({
  capital,
  flags,
  name,
  numericCode,
  population,
  region,
  subregion,
}: CardProps) => {


  return (
    <Content key={numericCode}>
      <ContainerImg>
        <Img src={flags.svg} />
      </ContainerImg>
      <ContainerText>
        <Country>{name.common}</Country>
        <Span>Capital: {capital}</Span>
        <Span>Population: {formatPopulation(population)}</Span>
        <Span>Region: {region}</Span>
        <Span>Subregion: {subregion}</Span>
      </ContainerText>
    </Content>
  );
};

export default AboutCountry;
