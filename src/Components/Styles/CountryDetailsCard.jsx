import styled from "@emotion/styled";

export const Section=styled.section`
display:flex;
justify-content:center;
align-items:center;
height:90vh;

@media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    height: auto; 
    padding: 0.5rem;
  }

`;

export const Card=styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
background-color: rgb(215, 230, 251);

border-radius:10px;
border-color:white;
height:max-content;
margin:2rem;
padding:2rem;
gap:2rem;
box-shadow: 5px 5px 2px #1d095a4e;

@media (max-width: 768px) {
    grid-template-columns: 1fr; 
    margin: 1rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
    margin: 0.5rem;
    padding: 1rem;
  }
`;

export const Load=styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: rgb(215, 230, 251);
`;
