import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  color: var(--text-header);
`;

export const HeaderContent = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 518px) {
   font-size: 2.2rem;
  }
  @media (max-width: 413px) {
   font-size: 1.75rem;
  }
`;

export const DarkMode = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
