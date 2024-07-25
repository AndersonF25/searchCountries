import styled from "styled-components";

export const Content = styled.div`
  max-width: 1500px;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 470px;
  object-fit: cover;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerText = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Country = styled.h2`
  font-size: 2.6rem;
`;

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
