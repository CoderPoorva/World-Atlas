import styled from "@emotion/styled";

export const CountryCards = styled.li`
  list-style: none;
  margin: 1rem;
`;

export const CountryCardContainer = styled.div`
  width: 250px;
  background-color: rgb(215, 230, 251);
  padding: 1rem;
  border-bottom: 4px solid rgb(24, 31, 101);
  border-radius: 15px;

  img {
    width: 100%;
    height: 100px;
    object-fit: contain;

    :hover {
      transform: scale(1.3);
      transition: transform 0.5s ease-in-out;
    
    }
    @media (max-width: 768px) {
    width: 200px; 
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }

  }
`;

export const CountryInfo = styled.div`
 p{
  margin: 0.5rem;
 }
`;