import styled from "@emotion/styled";

export const Main=styled.main`
padding: 3.2rem;
  margin:  auto;
  gap: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 990px){
    padding: 3.2rem;
    margin:  auto;
    gap: 6.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

export const Img=styled.div`
 width: 30rem;
 display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;

   img {
    width: 20rem
  }

  @media screen and (max-width: 990px) {
    width: 20rem;
  }
`;