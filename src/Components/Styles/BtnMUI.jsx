import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Btn = styled.button`
  padding: 10px 10px;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(#3d0443, #3b213e),
    linear-gradient(45deg, #ffffff, #000000);

  &:hover {
    background-image: #410041;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(83, 83, 83, 0.5);
  }
`;

export const Btn2 = styled.button`
  padding: 10px 10px;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #55015f;
  margin: 1rem;

  &:hover {
    background-color: #410041;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
    margin: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
    margin: 0.5rem;
    width: 50%;
  }
`;
export const Btn3 = styled.button`
  padding: 10px 10px;
  color: #37003b;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  background-color: none;
  margin: 1rem;

  &:hover {
    border-bottom: 2px solid #37003b;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
    margin: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 6px 18px;
    font-size: 0.8rem;
    margin: 0.5rem;
    width: 75%;
  }
`;
