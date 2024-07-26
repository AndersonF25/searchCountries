import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 300;
`;

export const Select = styled.select`
  border: none;
  padding: px;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid var(--border-color);
  }
`;

export const Option = styled.option`
  cursor: pointer;
  border: none;
  font-size: 0.95rem;
`;
