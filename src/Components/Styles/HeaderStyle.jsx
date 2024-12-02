import styled from "@emotion/styled";

export const NavParent=styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(215, 230, 251);
  padding: 1rem 3rem;
  box-shadow: 0 2px 7px rgba(0, 13, 69, 0.597);
`;

export const NavBar=styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  width: 80%;
`;

export const Hamburger=styled.div`
 display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 22px;
  cursor: pointer;
  right:35px;
  position: absolute;

  :hover{
    background-color: rgba(108, 139, 182, 0.515);
    border-radius: 5px;
  }

  @media (max-width: 768px){
    display: flex;
  }
`;

export const NavLinks=styled.ul`
 list-style: none;
  display: flex;
  justify-content: end;

  a{
  text-decoration: none;
  color: #000000;
  font-size: 1em;
  }

  li{
    margin: 0 15px;

    :hover{
      border-bottom: 2px solid #000000;
    }

    @media (max-width: 768px){
      margin: 5px 0;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background-color: rgb(215, 230, 251);
    width: 100%;
    height: 0;
    overflow: hidden;
    opacity: 0;
    z-index: 10;
    text-align: center;
  }
`;

