import styled from "@emotion/styled";

export const CountryBodyParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CountryBody = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-left: 2.5rem;

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const Load=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: rgb(255, 255, 255);
`;