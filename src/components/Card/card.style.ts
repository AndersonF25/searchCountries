import styled from "styled-components";

export const ContainerCard = styled.a`
  width: auto;
  display: flex;
  height: 380px;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);
  background-color: var(--bg-2);
  cursor: pointer;

  @media (max-width: 999px) {
    height: 460px;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 52%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  @media (max-width: 985px) {
    height: 60%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 20px 30px 20px;
`;

export const CountryName = styled.h2`
  font-size: 1.5rem;
  padding: 10px 0;
  font-weight: 600;
  color: var(--text-primary);
`;

export const Span = styled.span`
  font-size: 0.96rem;
  font-weight: 500;
  color: var(--text-secondary);
`;
