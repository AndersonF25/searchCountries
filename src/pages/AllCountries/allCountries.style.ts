import styled from "styled-components";

export const Container = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const InputAndFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: 748px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`;

export const Error = styled.span`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
