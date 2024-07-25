import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  height: 60px;
  background-color: #fff;
  width: 500px;
  -webkit-box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 17px -7px rgba(0, 0, 0, 0.75);

  @media (max-width: 518px) {
    width: 390px;
  }
  @media (max-width: 412px) {
    width: 360px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
width: 100%;
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  font-size: 1rem;
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  color: #888;
`;
