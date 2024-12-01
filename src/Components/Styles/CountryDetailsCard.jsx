import styled from "@emotion/styled";

export const Section=styled.section`
display:flex;
justify-content:center;
align-items:center;
background-color: rgb(43, 0, 48);
height:90vh;

@media (max-width: 768px) {
    padding: 1rem; /* Padding adjustment for tablets */
  }

  @media (max-width: 480px) {
    height: auto; /* Adjust height for mobile */
    padding: 0.5rem;
  }

`;

export const Card=styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
background-color: rgb(205, 122, 226);
border-radius:10px;
border-color:white;
height:max-content;
margin:2rem;
padding:2rem;
gap:2rem;
box-shadow: 5px 5px 2px rgba(228, 122, 255, 0.307);
border-left: 5px solid rgba(255, 255, 255, 0.837);

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
`