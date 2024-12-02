import styled from "@emotion/styled";

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountryFactsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 990px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardBody = styled.div`
  background-color: rgb(215, 230, 251);
  margin-bottom: 1rem;
  width: 300px;
  border-radius: 10px;
  border-bottom: 4px solid rgb(47, 66, 135);
`;

