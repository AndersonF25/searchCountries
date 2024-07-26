import styled from "styled-components";

export const Content = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 130px;
    gap: 10px;
  }
`;

export const ContainerImg = styled.div`
  max-width: 50%;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ContainerText = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media (max-width: 1000px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Country = styled.h2`
  font-size: 2.6rem;
  text-align: center;
`;

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
