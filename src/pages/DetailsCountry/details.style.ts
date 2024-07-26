import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height:80vh;
  display: grid;
  place-items: center;
  position: relative;

  @media (max-width:1502px) {
    padding: 0 10px;
  }
`;

export const BtnBack = styled.button`
  position: absolute;
  left: 15px;
  top: 20px;
  border: none;
  background-color: #ccc;
  padding: 3px 5px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all.3s;

  &:hover {
    transition: .3s;
    background-color: #c1c1c1;
  }
`;
